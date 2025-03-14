import json
# Načteme nově nahraný JSON soubor
file_path = "./final_results.json"

with open(file_path, "r", encoding="utf-8") as file:
    results_data = json.load(file)

# Seznam běžných mužských a ženských jmen pro určení genderu
male_names = {"MAREK", "HONZA", "MARCEL", "ADAM", "PETR", "VOJTA", "MIKULÁŠ", "TONY", "MIHAI", "KUBA", "OLEH", "MIRA", "ROMAN", "FILIP", "ONDRA", "TOMAS", "VIKTOR", "TONDA"}
female_names = {"LUCI", "MARTI", "RADKA", "SOŇA", "VAL", "NICOLE", "TERKA", "KAČKA", "MÍŠA", "BARČA", "ADÉL", "DENČA", "TÝNA", "EDIT", "JULIE", "ANIČKA", "KLÁRA", "ŠÁRKA", "MARIE"}

# Projdeme všechny členy týmů a přiřadíme jim gender podle jména
for house, house_data in results_data.items():
    for member in house_data["members"]:
        first_name = member["name"].split()[0]  # Vezmeme první slovo jako křestní jméno
        if first_name in male_names:
            member["gender"] = "M"
        elif first_name in female_names:
            member["gender"] = "F"
        else:
            member["gender"] = "N/A"  # Neznámé jméno

# Uložíme upravená data do nového JSON souboru
output_file_path = "./final_results_with_gender.json"
with open(output_file_path, "w", encoding="utf-8") as f:
    json.dump(results_data, f, indent=2, ensure_ascii=False)

# Vrátíme cestu ke stažení souboru
output_file_path
