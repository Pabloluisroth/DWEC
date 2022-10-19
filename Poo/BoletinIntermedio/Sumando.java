import java.util.Scanner;

public class Sumando {
  private int NumeroUno;
  private int NumeroDos;
  
  public Sumando(){
      this.NumeroUno = 1 ;
      this.NumeroDos = 2 ;
  }

  public Sumando (int NumeroUno, int NumeroDos){
      this.NumeroUno = NumeroUno;
      this.NumeroDos = NumeroDos;
  }

  Scanner sc = new Scanner(System.in);

  public int getNumeroUno() {
    return NumeroUno;
  }
  public int getNumeroDos() {
    return NumeroDos;
  }

  public void setNumeroUno(int NumeroUno) {
    this.NumeroUno = NumeroUno;
  }
  public void setNumeroDos(int NumeroDos) {
    this.NumeroUno = NumeroDos;
  }

  public int Suma(int NumeroUno, int NumeroDos) {
    int suma = NumeroUno + NumeroDos;
    return suma;
  }

  public int leer() {
    return Integer.parseInt(this.sc.nextLine());
  }

  public static void main(String[] args) {
    Sumando sumando1 = new Sumando();
    System.out.println("Introduceme un numero");
    sumando1.setNumeroUno(sumando1.leer());
    System.out.println("Introduceme un numero");
    sumando1.setNumeroDos(sumando1.leer());
  }
}