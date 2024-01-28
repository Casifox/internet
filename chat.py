import sqlite3

def create_database():
    # Connexion à la base de données (le fichier sera créé s'il n'existe pas)
    conn = sqlite3.connect('chat_database.db')

    # Création d'un objet curseur
    cursor = conn.cursor()

    # Création de la table "messages" avec des colonnes pour l'ID, l'auteur, le contenu du message et le timestamp
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            content TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    ''')

    # Fermeture de la connexion
    conn.close()

if __name__ == "__main__":
    create_database()
