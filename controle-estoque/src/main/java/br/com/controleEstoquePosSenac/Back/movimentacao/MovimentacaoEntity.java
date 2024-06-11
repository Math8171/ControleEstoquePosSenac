package Back.movimentacao;

public class MovimentacaoEntity {
    
    private int id;
    private int fkOdProduto;
    private int fkIdLoja;
    private int qtdeMoviment;
    private int qtdeTotal;
    private int valorMedio;
    private int valotTotal;
    private int fkIdTipoMoviment;
    private int dtMoviment;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFkOdProduto() {
        return fkOdProduto;
    }

    public void setFkOdProduto(int fkOdProduto) {
        this.fkOdProduto = fkOdProduto;
    }

    public int getFkIdLoja() {
        return fkIdLoja;
    }

    public void setFkIdLoja(int fkIdLoja) {
        this.fkIdLoja = fkIdLoja;
    }

    public int getQtdeMoviment() {
        return qtdeMoviment;
    }

    public void setQtdeMoviment(int qtdeMoviment) {
        this.qtdeMoviment = qtdeMoviment;
    }

    public int getQtdeTotal() {
        return qtdeTotal;
    }

    public void setQtdeTotal(int qtdeTotal) {
        this.qtdeTotal = qtdeTotal;
    }

    public int getValorMedio() {
        return valorMedio;
    }

    public void setValorMedio(int valorMedio) {
        this.valorMedio = valorMedio;
    }

    public int getValotTotal() {
        return valotTotal;
    }

    public void setValotTotal(int valotTotal) {
        this.valotTotal = valotTotal;
    }

    public int getFkIdTipoMoviment() {
        return fkIdTipoMoviment;
    }

    public void setFkIdTipoMoviment(int fkIdTipoMoviment) {
        this.fkIdTipoMoviment = fkIdTipoMoviment;
    }

    public int getDtMoviment() {
        return dtMoviment;
    }

    public void setDtMoviment(int dtMoviment) {
        this.dtMoviment = dtMoviment;
    }

}
