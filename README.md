# Curso-JavaScript-Alura
Curso introdutório a maior linguagem do mundo

### AULA 1 
- DOM (Document Object Model), representação do HTML para o nosso JavaScript, acessível por uma palava do JavaScript chamada document;
- O document na tag script, não utilizamos "" (aspas), pois ele funcionará como uma varíavel, e as aspas são usadas quando trabalhamos com uma string, e não é uma palavra ou frase que queremos imprimir.
- Vamos encontrar uma forma de pesquisar somente a tag h1. Para isto, usaremos o método querySelector(), passando como parâmetro o que queremos encontrar neste caso, entre aspas, pois queremos o termo exato.
- Algumas tags, como h1, h2, p e span, possuem um conteúdo de texto. Nesses casos, o JavaScript possui uma propriedade que nos permite acessá-lo: textContent. Vamos testar e imprimir o conteúdo de texto da variável titulo, que representa o h1.

Resumo da Aula 1
* Separar a organização de nosso código em arquivos .js
* Importar arquivos .js sempre ao final do body
* A representação do HTML pela variável document
* A função que faz busca querySelector()
* Preferir selecionar por #id ou .classe