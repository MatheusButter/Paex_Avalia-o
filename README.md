# PAEX Avaliações 2026

Sistema web responsivo para apoiar a análise de mérito do Edital PAEX 07/2026 do Ifes. O objetivo é substituir o fluxo feito por planilhas e mensagens por uma área organizada para avaliadores e uma visão central de acompanhamento.

## Estrutura do repositório

| Caminho | Conteúdo |
| --- | --- |
| `/` | Interface navegável, estática e responsiva. Pode ser aberta diretamente em qualquer navegador. |
| `/paex-operacional` | Base full-stack preparada para a próxima etapa, com Worker, banco D1, Drizzle e estrutura Vinext. |

## Interface disponível

- Painel mestre com propostas habilitadas, andamento da banca, prazo e alertas de divergência.
- Fila individual de propostas para cada avaliador.
- Ficha de avaliação com notas, parecer e documentos de referência.
- Critérios organizados a partir da matriz do edital: currículo, ação de extensão, plano de trabalho e condições de execução.
- Sinalização de terceiro parecer quando houver diferença de 30 pontos ou mais entre duas avaliações.
- Layout adaptado para computador, tablet e celular.

## Próxima etapa operacional

A evolução do sistema adicionará:

1. Login por e-mail e senha, com perfil `mestre` e perfil `avaliador`.
2. Cadastro e desativação de avaliadores, incluindo contas de teste.
3. Importação das propostas habilitadas a partir da planilha de análise documental.
4. Distribuição de propostas sem exposição dos pareceres entre avaliadores.
5. Salvamento de rascunhos, envio definitivo, cálculo de notas e acionamento do terceiro parecer.
6. Histórico de auditoria, relatórios e exportação de resultados.

## Executar a interface atual

Abra `index.html` diretamente no navegador. Esta versão não exige instalação de programas ou dependências.

## Executar a base full-stack

Quando houver um ambiente de desenvolvimento com Node.js disponível:

```bash
cd paex-operacional
npm install
npm run dev
```

O diretório `paex-operacional` ainda é a fundação técnica do sistema e será conectado às telas e aos dados oficiais na próxima implementação.

