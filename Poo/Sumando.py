class Sumando :
    NumeroUno = 0
    NumeroDos = 0
    def __init__(self) :
        self.NumeroUno = 1
        self.NumeroDos = 2
    def __init__(self, NumeroUno,  NumeroDos) :
        self.NumeroUno = NumeroUno
        self.NumeroDos = NumeroDos
  
    def  getNumeroUno(self) :
        return self.NumeroUno
    def  getNumeroDos(self) :
        return self.NumeroDos
    def setNumeroUno(self, NumeroUno) :
        self.NumeroUno = NumeroUno
    def setNumeroDos(self, NumeroDos) :
        self.NumeroUno = NumeroDos
    def  Suma(self, NumeroUno,  NumeroDos) :
        suma = NumeroUno + NumeroDos
        return suma
    def  leer(self) :
        return int(input())
    @staticmethod
    def main( args) :
        sumando1 = Sumando()
        print("Introduceme un numero")
        sumando1.setNumeroUno(sumando1.leer())
        print("Introduceme un numero")
        sumando1.setNumeroDos(sumando1.leer())