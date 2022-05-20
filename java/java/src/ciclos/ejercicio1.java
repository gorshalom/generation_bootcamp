package ciclos;

import javax.swing.JOptionPane;

public class ejercicio1 {

	public static void main(String[] args) {
		/*
		 * Adivina el n�mero
		 * 
		 * Escribe un programa en Java que te pida introducir un n�mero y lo compare con otro n�mero que puede ser aleatorio o establecido por t�.
		 * Mientras que el n�mero no sea igual al establecido como base, el programa se seguir� ejecutando.
		 * Una vez que ambos n�meros sean iguales, el programa se detendr� y mostrar� lo siguiente en consola:
		
		 *"Felicidades, adivinaste el n�mero."
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
