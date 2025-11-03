import java.util.*;
import java.lang.Math;

public class Program {
    private static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        String tempao, typepao, adicionais, fatias, fatias2, vegies, esquentar;

        System.out.println("Vamos fazer uma sanduíche! Primeiramente, precisamos ver se temos os ingredientes necessários");
        System.out.println("Você tem pão?");
        tempao = input.nextLine();
        if (tempao.equals("sim")) {
            tempao = "sim";
        } else {
            System.out.println("Ter pão é essencial para criar um sanduíche");
            System.out.println("Comprando pão...");
            System.out.println("O pão foi comprado!");
            tempao = "sim";
        }
        System.out.println("Temos que escolher agora o tipo de pão! Qual o tipo de pão que você prefere: Pão integral ou Pão branco?");
        typepao = input.nextLine();
        System.out.println("Certo, você prefere " + typepao);
        System.out.println("Agora vamos para os adicionais, você prefere manteiga ou maionese? (nenhnum também é uma opção)");
        adicionais = input.nextLine();
        if (adicionais.equals("nenhum")) {
            System.out.print("Certo! " + adicionais);
            System.out.println(". Mais alguma coisa? talvez uma fatia de queijo ou de presunto?");
            fatias = input.nextLine();
        } else {
            System.out.println("Ótimo! Vamos colocar mais alguma coisa?");
            System.out.println("Que tal algumas fatias de queijo ou de presunto?Gostaria de alguma? Se sim, qual?");
            fatias = input.nextLine();
        }
        if (fatias.equals("não")) {
            fatias2 = "não";
        } else {
            System.out.println("Certo, colocaremos " + fatias);
            System.out.println("Gostaria de mais alguma fatia? Se sim, qual?");
            fatias2 = input.nextLine();
            if (fatias2.equals("não")) {
            } else {
                System.out.println("Ok! " + fatias);
                System.out.println(" com " + fatias2);
            }
        }
        System.out.println("Gostaria de adicionar alface, tomate ou os dois? (obrigatória, para sua própria saúde ;D)");
        vegies = input.nextLine();
        if (vegies.equals("os dois")) {
            vegies = "alface e tomate";
        }
        System.out.println("Ok! Adicionaremos " + vegies);
        System.out.println("Montagem completa! Fechando o sanduíche...");
        System.out.println("O seu sanduíche ficou da seguinte forma: ");
        System.out.println("1. " + typepao);
        System.out.println(" 2. " + adicionais);
        System.out.println("3. " + fatias);
        System.out.println("4. " + fatias2);
        System.out.println("5. " + vegies);
        System.out.println("6. " + typepao);
        System.out.println("Deseja aquecer o sanduíche?");
        esquentar = input.nextLine();
        if (esquentar.equals("sim")) {
            System.out.println("Esquentando...");
        }
        System.out.println("O seu sanduíche está pronto!");
    }
}
