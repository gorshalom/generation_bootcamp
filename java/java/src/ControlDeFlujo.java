import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner (System.in);
		System.out.print("�Cu�l es tu edad?");
		int edad = sc.nextInt();


		if (edad >=18) {
			if (edad> 50) {
				System.out.println("Eres un adulto mayor");
			}
			else{
				System.out.println("Eres mayor de edad");
			}
		}
		else {
			System.out.println("Eres menor de edad");
		}

		String mensaje = (edad >= 18) ? ("Eres mayor de edad x2"): ("Eres menor de edad");
		System.out.println(mensaje);

		System.out.println("En qu� dia estamos: ");
		sc.nextLine();
		String dia = sc.nextLine();
		sc.close();

		switch(dia.toLowerCase()) {
		case "lunes":
			System.out.println("5 minutos m�s");
			break;
		case "martes":
			System.out.println("no te cases ni te embarques");
			break;
		case "miercoles":
			System.out.println("ombligo de semana");
			break;
		case "jueves":
			System.out.println("Viernes chiquito");
			break;
		case "viernes":
			System.out.println("chelas");
			break;
		default:
			System.out.println("Dia no valido");
			break;
		}

	}

}
