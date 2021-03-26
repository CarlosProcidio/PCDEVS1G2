import { ViacepService } from '../../viacep.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdministradorService } from '../administrador.service';
import {MessageService} from 'primeng/api';


interface Categoria {
  nome: string,
  categ: string
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
   
})

export class FormularioComponent implements OnInit {
  
  administradorGeral: any = {
    id: "",
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",  
    email: "",
    logomarca: "",
    site: "",
    telefoneFixo: "",
    telefoneCel: "",
    responsavel:"",
    negocio:"",
    categoria:"",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    mapa:"",
    referencia:"",
    distancia:"",
    horario:""
    }
  
  codigoCliente: any;
  
  operacao: boolean = true;
  
  categorias: Categoria[] = [
    {nome: 'Serviços...', categ: ' '},
      {nome: 'GASTRONOMIA', categ: 'GASTRONOMIA'},
      {nome: 'HOSPEDAGEM', categ: 'HOSPEDAGEM'},
      {nome: 'PASSEIOS/ROTEIROS', categ: 'PASSEIOS/ROTEIROS'} ];

  constructor(
    private service: AdministradorService,
    private messageService: MessageService,  
    private route: ActivatedRoute,
    private title: Title,
    private router: Router,
    private viacepService: ViacepService
//    private formBuilder: FormBuilder
    ) { }
    

    ngOnInit(): void {
/*
      this.form = this.formBuilder.group({
        razaoSocial: ['', Validators.required],
        cnpj: ['', Validators.required],
        nomeFantasiaq: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        logomarca: [''],
        telefoneCel: ['', Validators.required],
        responsavel: ['', Validators.required],
        descricao: ['', Validators.required],
        categoria: ['', Validators.required],
        cep: ['', Validators.pattern(/^\d{5}\-\d{3}$/)],
        lagradouro: [''],
        numero: [''],
        complemento: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
        mapa: [''],
        referencia: ['', Validators.required],
        distancia: [''],
        horario: ['', Validators.required],
      });
  */    
      
      this.codigoCliente = this.route.snapshot.params['id'];
      this.title.setTitle('Novo cliente');
  
      if (this.codigoCliente) {
        this.operacao = false;
        this.carregarCliente(this.codigoCliente);
      }
    }
  
    carregarCliente(codigoCliente: number){
      this.service.buscarById(codigoCliente).subscribe(resposta => {      
        this.administradorGeral = <any>resposta; 
        this.title.setTitle(`Edição do cliente: ${this.administradorGeral.id}`);
});    
    }
  
    cadastrarOuAtualizar(){
      if(this.operacao){
        this.cadastrar();
      }else{
        this.atualizar();
      }
    }
  
    cadastrar(){
  
      this.service.salvar(this.administradorGeral).subscribe(
        resposta => {
        this.messageService.add(
        {
          key: 'toast',
          severity: 'success',
          summary: 'CLIENTE',
          detail: 'cadastrado com sucesso!'
        });
        this.limparFormulario();     
      },    
      () => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!'
          });
      });
    }

    atualizar(){
  
      this.service.atualizar(this.administradorGeral).subscribe(
        resposta => {
        this.messageService.add(
        {
          key: 'toast',
          severity: 'success',
          summary: 'CLIENTE',
          detail: 'atualizado com sucesso!'
        });
        this.limparFormulario(); //limpar os campos     
        this.operacao = true; 
        this.router.navigate(['/listar/administrador']);
      },    
      () => {
        this.messageService.add(
          {
            key: 'toast',
            severity: 'error',
            summary: 'ERRO',
            detail: 'Não foi possível cadastrar o cliente!'
          });
      });
    }
  
    limparFormulario() {    
      this.administradorGeral = {}; 
    }

buscarCep(cep:any){
  console.log(cep);
  let cep1 = cep.replace('_','');
  console.log(cep1);
  if(cep1.length == 9){
    this.viacepService.search(cep.replace('-','')).subscribe(data => {
      console.log(data);
      this.administradorGeral.logradouro = data.logradouro;
      this.administradorGeral.bairro = data.bairro;
      this.administradorGeral.cidade = data.localidade;
      this.administradorGeral.estado = data.uf;
    })
  }
}

  }
  

  