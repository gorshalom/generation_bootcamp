package ciclos;

import javax.swing.JOptionPane;

public class CicloDoWhile {
	
	public static void main(String[] args) {
		String clave = "123456";

		String comparacion = "";

		do {

		comparacion = JOptionPane.showInputDialog("Introduce la contrase�a, por favor");

		if(clave.equals(comparacion) == false) {
				System.out.println("La contrase�a es incorrecta");
			}
		} while (clave.equals(comparacion) == false);

		System.out.println("La contrase�a es correcta");
	}

}
