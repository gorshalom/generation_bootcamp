package com.api;

import java.util.Scanner;

public class PruebaApi {
	
	public static void main(String[] args) {

		String nombre = "Juancho";
		System.out.println(nombre);

		String apellido = new String ("Garcia");
		System.out.println(apellido);

		System.out.println(nombre.charAt(5));

		Integer.parseInt("50");

		//Scanner: necesita instanciar
		Scanner sc = new Scanner (System.in);
		sc.nextInt();
		sc.close();

		//Math: no necesita instanciar (m�todo est�tico)
		Math.random();

	}

}
