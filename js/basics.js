function maximo_risco_infeccao() {
    return (0.05 / (qte_ocupantes() * (1 - prevalencia()) * (1 - (imunizados() * 0.5)))) * 100; 
};


