require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/qr-redirect';

async function connectToDatabase() {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log('Hashované heslo před uložením:', this.password);
  }
  next();
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function initAdmin() {
  await connectToDatabase();

  const username = 'admin';
  const password = 'supersecret123'; // Přesně to, co zadáváš

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Admin už existuje:', existingUser);
      return;
    }

    const user = new User({ username, password });
    await user.save();
    console.log('Admin vytvořen:', { username, password: user.password });
  } catch (err) {
    console.error('Chyba při vytváření admina:', err);
  } finally {
    mongoose.connection.close();
  }
}

initAdmin();
