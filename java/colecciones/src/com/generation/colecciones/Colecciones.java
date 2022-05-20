package com.generation.colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
		
		System.out.println("\tList --- ArrayList");
		List<String> miArray= new ArrayList<String>();

		miArray.add("Pedro");
		miArray.add("Yair");
		miArray.add("Mar�a");
		miArray.add(1, "Ra�l");

		//String elemento = miArray.remove(1);

		System.out.println(miArray);

		System.out.println(miArray.size());

		String elemento = miArray.remove(1);

		System.out.println(miArray);

		System.out.println(miArray.size());
		System.out.println(elemento);

		imprimir(miArray); 

		

		int num1 = 10;
		Integer num2 = 10;

		System.out.println(num1);
		System.out.println(num2.getClass().getSimpleName()); 
		


		ArrayList<Integer> miArray2 = new ArrayList<Integer>(); 

		miArray2.add(3);
		miArray2.add(1323541);
		miArray2.add(6552);

		imprimir(miArray2);
		
		
		System.out.println("\tSet --- HashSet");
		Set<String> miSet = new HashSet<String>();
		

		miSet.add("Martha");
		miSet.add("Martha");
		miSet.add("Lupe");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Gabriel");

		System.out.println(miSet);

		imprimir(miSet);

		miSet.contains(miSet.contains("juancho")); 
		miSet.remove(2); 
		miSet.remove("pancho"); 

		
		System.out.println("\t Map --- HashMap");

		HashMap<String, Integer> miMap = new HashMap<String, Integer>();

		miMap.put("Valor 1", 45);
		miMap.put("Valor 1", 250); 
		miMap.put("Valor 2", 50);
		miMap.put("Valor 3", 300);
		miMap.put("Valor 4", 180);

		System.out.println(miMap);
		System.out.println(miMap.values()); 
		System.out.println(miMap.keySet()); 

		System.out.println(miMap.get("Valor 1"));

		for (String llave : miMap.keySet() ) {
			System.out.println(llave + " : " + miMap.get(llave) );

		}
		
	}
	
	
	public static void imprimir (Collection coleccion) {
		for(Object elemento : coleccion) {
			System.out.println("Elemento = " +  elemento);
		}
	}
}
