import java.util.Scanner;

public class Escaner {
	public static void main(String[] args) {
		Scanner escaner = new Scanner(System.in);
		System.out.print("Escribe un n�mero");
		int numero = escaner.nextInt();

		if (numero < 10) {
			System.out.println("El n�mero es menor a 10");
		}

		System.out.println(numero);

	}


}
