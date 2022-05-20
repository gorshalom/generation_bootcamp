package ciclos;

import javax.swing.JOptionPane;

public class ejercicio1 {

	public static void main(String[] args) {
		/*
		 * Adivina el número
		 * 
		 * Escribe un programa en Java que te pida introducir un número y lo compare con otro número que puede ser aleatorio o establecido por tí.
		 * Mientras que el número no sea igual al establecido como base, el programa se seguirá ejecutando.
		 * Una vez que ambos números sean iguales, el programa se detendrá y mostrará lo siguiente en consola:
		
		 *"Felicidades, adivinaste el número."
		*/
		
		int adivinar = (int) (Math.random()*(10-1));
        boolean salir = true;
        System.out.println(adivinar);

        while (salir){
            int input= Integer.valueOf(JOptionPane.showInputDialog("Introduce un numero"));
            if(input == adivinar){
                salir = false;
            }
            else{
                System.out.println("Numero incorrecto");
            }
        }
        System.out.println("Felicidades adivinaste el numero!!");

	}

}
