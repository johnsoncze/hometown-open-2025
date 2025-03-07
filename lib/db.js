import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(mongoose => {
      console.log('Connected to MongoDB');
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Schéma pro redirecty
const RedirectSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  url: { type: String, required: true },
  scans: { type: Number, default: 0 },
  lastScanned: { type: Date },
  deleted: { type: Boolean, default: false },
});

const RedirectLogSchema = new mongoose.Schema({
  code: { type: String, required: true },
  date: { type: Date, default: Date.now },
  ip: { type: String },
  userAgent: { type: String },
});

// Schéma pro uživatele
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hashování hesla před uložením
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const Redirect = mongoose.models.Redirect || mongoose.model('Redirect', RedirectSchema);
export const RedirectLog = mongoose.models.RedirectLog || mongoose.model('RedirectLog', RedirectLogSchema);
export const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default connectToDatabase;
