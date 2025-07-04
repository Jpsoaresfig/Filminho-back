</head>
<body>

  <h1>Filminho-back</h1>
  <p>API backend para um sistema de cadastro de filmes pessoais, feito com NestJS, TypeORM e PostgreSQL.</p>

  <section>
    <h2>Tecnologias</h2>
    <ul>
      <li><a href="https://nestjs.com/" target="_blank" rel="noopener">NestJS</a> — Framework Node.js para backend.</li>
      <li><a href="https://typeorm.io/" target="_blank" rel="noopener">TypeORM</a> — ORM para integração com banco de dados.</li>
      <li><a href="https://www.postgresql.org/" target="_blank" rel="noopener">PostgreSQL</a> — Banco de dados relacional.</li>
      <li>TypeScript</li>
    </ul>
  </section>

  <section>
    <h2>Funcionalidades</h2>
    <ul>
      <li>CRUD completo de filmes.</li>
      <li>Controle dos campos: título, descrição, imagem, gênero, ano de lançamento, avaliação e data assistido.</li>
      <li>Sincronização automática do esquema com banco (via <code>synchronize: true</code> no desenvolvimento).</li>
    </ul>
  </section>

  <section>
    <h2>Pré-requisitos</h2>
    <ul>
      <li>Node.js v16+</li>
      <li>PostgreSQL instalado e rodando localmente</li>
      <li>Yarn ou npm</li>
    </ul>
  </section>

  <section>
    <h2>Configuração</h2>
    <ol>
      <li>
        Clone o repositório:
        <pre><code>git clone https://github.com/Jpsoaresfig/Filminho-back.git
cd Filminho-back</code></pre>
      </li>
      <li>
        Instale as dependências:
        <pre><code>npm install
# ou
yarn install</code></pre>
      </li>
      <li>
        Configure o banco de dados PostgreSQL:
        <ul>
          <li>Crie um banco chamado <code>filmezinho</code>.</li>
          <li>Configure usuário e senha no arquivo <code>app.module.ts</code> (ou configure via variáveis de ambiente).</li>
        </ul>
      </li>
      <li>
        Configure a conexão no <code>AppModule</code>:
        <pre><code>TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'filmezinho',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // para desenvolvimento
}),</code></pre>
      </li>
    </ol>
  </section>

  <section>
    <h2>Executando a aplicação</h2>
    <pre><code>npm run start
# ou
yarn start</code></pre>
    <p>A API ficará disponível em <a href="http://localhost:3000" target="_blank" rel="noopener">http://localhost:3000</a>.</p>
  </section>

  <section>
    <h2>Estrutura do Projeto</h2>
    <ul>
      <li><code>/src/entities</code> — Entidades TypeORM (ex: Filme).</li>
      <li><code>/src/modules</code> — Módulos NestJS (ex: FilmeModule).</li>
      <li><code>/src/controllers</code> — Controladores REST.</li>
      <li><code>/src/services</code> — Serviços de negócio.</li>
    </ul>
  </section>

  <section>
    <h2>Considerações</h2>
    <ul>
      <li>Em produção, recomenda-se usar migrations ao invés de <code>synchronize: true</code>.</li>
      <li>Ajuste as configurações de conexão conforme ambiente.</li>
      <li>Adicione autenticação e autorização conforme necessário.</li>
    </ul>
  </section>

  <section>
    <h2>Contato</h2>
    <p>Desenvolvido por João Pedro Soares de Figueiredo<br />
      <a href="https://github.com/Jpsoaresfig" target="_blank" rel="noopener">GitHub</a> | 
      <a href="https://www.linkedin.com/in/jpsoaresfig" target="_blank" rel="noopener">LinkedIn</a>
    </p>
  </section>

 

</body>
</html>
