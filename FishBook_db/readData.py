import sqlite3       #This will import the sqlite3 module into your Python program. You can then use this module to create and interact with SQLite databases.
# Having trouble pushing from VS code so I copied it myself
# Open the file for reading
with open("data.txt", "r") as file:
    # Create a SQLite database connection (or open it if it exists)
    conn = sqlite3.connect("mydatabase.db")
    cursor = conn.cursor()

    # Create a table to store the data
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS mytable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_string TEXT,
            user_int1 INTEGER,
            user_int2 INTEGER
        )
    ''')
    conn.commit()

    for line in file:
        words = line.strip().split()
        
        if len(words) % 3 == 0:
            for i in range(0, len(words), 3):
                user_string = words[i]
                user_int1 = int(words[i + 1])
                user_int2 = int(words[i + 2])

                # Insert the data into the SQLite database
                cursor.execute("INSERT INTO mytable (user_string, user_int1, user_int2) VALUES (?, ?, ?)", (user_string, user_int1, user_int2))
                conn.commit()
        else:
            print("Invalid data format on this line.")

    # Close the database connection
