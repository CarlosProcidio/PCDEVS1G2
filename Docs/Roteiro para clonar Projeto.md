### Roteiro Projeto Integrador (a partir do clone)

#### No Terminal 1:
- Entre no seu diretório de projetos;

// Você pode optar pelo link SSH ou HTTPS;
```
git clone git@github.com:CarlosProcidio/PCDEVS1G2.git
cd PCDEVS1G2/
```

// como ainda não subimos tudo para o branch "main", vc deve trocar de branch"
```
git checkout DEV
git pull
```

// instalar dependências do Projeto
```
npm i
```

// iniciar Projeto no Angular
```
ng serve
```

// se quiser usar outra porta diferente da 4200, vc pode usar o comando abaixo:
<spam>ng serve --port <porta> (sem os < >)</spam>

#### No Terminal 2:
// Entre no seu diretório do Pjetos PCDEVS1G2
// iniciar o JSON SERVER
```
json-server --watch db.cadastro.json
```
