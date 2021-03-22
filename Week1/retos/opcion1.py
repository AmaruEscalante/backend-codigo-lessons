from datetime import datetime
name = input('Ingresa tu nombre: ')
age = int(input('Ingresa tu edad: '))

# Si es menor de edad
if age < 18:

    if int(datetime.now().hour) > 18:
        print(f"Debes ir a dormir {name}")
    else:
        print(f"Debes hacer tu tarea {name}")

else:
    print(f"{name}, ya eres mayor de edad no tienes que hacer nada")
