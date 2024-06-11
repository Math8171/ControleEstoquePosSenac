package Back.estoque;

public class EstoqueEntity {
    
    private int id;
    private int fkIdProduto;
    private int qtdeTotalProd;
    private int repProdEstoque;
    private int valorMedio;
    private int valorTodal;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFkIdProduto() {
        return fkIdProduto;
    }
    public void setFkIdProduto(int fkIdProduto) {
        this.fkIdProduto = fkIdProduto;
    }
    public int getQtdeTotalProd() {
        return qtdeTotalProd;
    }

    public void setQtdeTotalPro(int qtdeTotalProd) {
        this.qtdeTotalProd = qtdeTotalProd;
    }

    public int getRepProdEstoque(){
        return repProdEstoque;
    }

    public void setRepProdEstoque(int repProdEstoque) {
        this.repProdEstoque = repProdEstoque;
    }

    public int getValorMedio() {
        return valorMedio;
    }

    public void setValorMedio(int valorMedio) {
        this.valorMedio = valorMedio;
    }

    public int getValorTodal() {
        return valorTodal;
    }

    public void setValorTodal(int valorTodal) {
        this.valorTodal = valorTodal;
    }
}
