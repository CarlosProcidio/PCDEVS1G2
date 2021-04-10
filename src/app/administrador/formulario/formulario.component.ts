import { ViacepService } from '../../viacep.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdministradorService } from '../administrador.service';
import {MessageService, SelectItemGroup} from 'primeng/api';


// interface Categoria {
//   cat: string,
//   tipo: string,
//   nome: string,
//   icone: string
// }

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
    responsavel:"",
    email: "",
    site: "",
    telefoneFixo: "",
    telefoneCel: "",
    negocio:"",
    categoria:"",
    servico:"",
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
  ca: any = [];
  tipoAnt: any;
  codigoCliente: any;
  categorias: any;
  operacao: boolean = true;
  
  servico: string;

  grupoCategoria: SelectItemGroup[];

  
  // categorias: Categoria[] = [
  //     {nome: 'Serviços...', categ: ' '},
  //     {nome: 'GASTRONOMIA', categ: 'GASTRONOMIA'},
  //     {nome: 'HOSPEDAGEM', categ: 'HOSPEDAGEM'},
  //     {nome: 'PASSEIOS/ROTEIROS', categ: 'PASSEIOS/ROTEIROS'}
  //   ];

  constructor(
    private service: AdministradorService,
    private messageService: MessageService,  
    private route: ActivatedRoute,
    private title: Title,
    private router: Router,
    private viacepService: ViacepService
//    private formBuilder: FormBuilder
    ) {

  this.grupoCategoria = [
  {
    label: 'GASTRONOMIA' ,  value: 'gastronomia', 
    items: [
        {label: 'Bares/Lanches', value: 'Bares/Lanches'},
        {label: 'Cafés/Docerias', value: 'Cafés/Docerias'},
        {label: 'Cozinha Brasileira', value: 'Cozinha Brasileira'},
        {label: 'Cozinha Internacional', value: 'Cozinha Internacional'},
        {label: 'Pizzarias', value: 'Pizzarias  '},
        {label: 'Quiosques', value: 'Quiosques'},
        {label: 'Demais Segmentos', value: 'Demais Segmentos'}
    ]
  },
  {
    label: 'HOSPEDAGEM' ,  value: 'hospedagem', 
    items: [
        {label: 'Hotéis', value: 'Hotéis'},
        {label: 'Hotéis Fazenda', value: 'Hotéis Fazenda'},
        {label: 'Motéis', value: 'Motéis'},
        {label: 'Pousadas', value: 'Pousadas'},
        {label: 'Resorts', value: 'Resorts'},
        {label: 'Campings', value: 'Campings'}
    ]
  },
  {
    label: 'O QUE FAZER' ,  value: 'oquefazer', 
    items: [
        {label: 'Compras', value: 'Compras'},
        {label: 'Cultura', value: 'Cultura'},
        {label: 'Lazer', value: 'Lazer'},
        {label: 'Agências de Turismo', value: 'Agências de Turismo'}
    ]
  },
  {
    label: 'ROTEIROS' ,  value: 'roteiros', 
    items: [
        {label: 'Aventuras', value: 'Aventuras'},
        {label: 'Destilarias', value: 'Destilarias'},
        {label: 'Equestres', value: 'Equestres'},
        {label: 'Flores e Frutas', value: 'Flores e Frutas'},
        {label: 'Pesqueiros', value: 'Pesqueiros'},
        {label: 'Religioso', value: 'Religioso'},
        {label: 'Rural', value: 'Rural'}
    ]
  },
  {
    label: 'PREFEITURA' ,  value: 'pr', 
    items: [
        {label: 'Público', value: 'Público'}
    ]
  }
 ];

//  categChechbox = [
// 	       {
// 	        categ: 'HOSPEDAGEM' , value = 'hosp' ,
// 	        items: [
//       		{ 'tipo': 'ACESSIBILIDADE:',
//         	  'nome': 'Cadeirante',
//         	  'icone': 'fa-wheelchair'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//         	  'nome': 'Def.Auditivo',
//         	  'icone': 'fa-deaf'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//        		  'nome': 'Def.Visual',
//       		  'icone': 'fa-blind'
//     	  	},
//     		  { 'tipo': 'ACEITA CARTÕES:',
//         	  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-amex'
//      	  	},
//     		  { 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-diners-club'
//       		},
//     	  	{ 'tipo': 'ACEITA CARTÕES:',
//         	  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-mastercard'
//      		  },
//     		    { 'tipo': 'ACEITA CARTÕES:',
//        		  'nome': 'Cartões de crédito',
//         	    'icone': 'fa-cc-visa'
//      		  },
//      		  { 'tipo': 'ACEITA CARTÕES:',
//        		  'nome': 'Cartão genérico',
//       		  'icone': 'fa-money-check'
//      		  },
//       		{ 'tipo': 'ACEITA CARTÕES:',
//         	  'nome': 'Dinheiro',
//       		  'icone': 'fa-dollar-sign'
//       		},
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//       		  'nome': 'Adega de Vinho',
//       		  'icone': 'fa-wine-bottle'
//       		},      
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//       		  'nome': 'Bar',
//          	  'icone': 'fa-cocktail'
//       		},      
//      		  { 'tipo': 'ALIMENTAÇÃO:',
//         	  'nome': 'Café da manhã incluso',
// 		        'icone': 'fa-coffee'
//       		},      
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//         	  'nome': 'Restaurante',
//         	  'icone': 'fa-utensils'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Aceita-se pets',
//       		  'icone': 'fa-paw'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Ar-condicionado',
//       		  'icone': 'fa-snowflake'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Carregador de malas',
//       		  'icone': 'fa-luggage-cart'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'espaço saúde',
//         	  'icone': 'fa-spa'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Estacionamento',
//       		  'icone': 'fa-parking'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Frigobar',
//       		  'icone': 'fa-refrigerator'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Não fumante',
//       		  'icone': 'fa-smoking-ban'
//      		  },      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Piscina',
//       		  'icone': 'fa-swimming-pool'
//       		},      
//      		  { 'tipo': 'CONVENIÊNCIAS:',
//      		   'nome': 'Salão fitness',
//     		   'icone': 'fa-dumbbell'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Serviço de quarto',
//       		  'icone': 'fa-concierge-bell'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Wifi',
//       		  'icone': 'fa-wifi'
//       		},     
//       		{ 'tipo:' 'REDES SOCIAIS:',
//       		  'nome': 'Facebook',
//       		  'icone': 'fa-facebook-square'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//       		  'nome': 'Instagram',
//       		  'icone': 'fa-instagram'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Site',
//        	  'icone': 'fa-globe'
//       		}, 
//      		{ 'tipo:' 'REFERÊNCIA DE CATEGORIA:',
//            'nome': 'Estrelas',
//         	  'icone': 'fa-star'
//      		 }
//          ]
// 	       },
// 	       {
// 	        categ: 'GASTRONOMIA' , value = 'gast' ,
// 	        items: [
// 		      { 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Cadeirante',
//       		  'icone': 'fa-wheelchair'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Auditivo',
//       		  'icone': 'fa-deaf'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Visual',
//       		  'icone': 'fa-blind'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-amex'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-diners-club'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-mastercard'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-visa'
//       		},
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//       		  'nome': 'Adega de Vinho',
//         	  'icone': 'fa-wine-bottle'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Aceita-se pets',
//       		  'icone': 'fa-paw'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Ar-condicionado',
//       		  'icone': 'fa-snowflake'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Estacionamento',
//       		  'icone': 'fa-parking'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//       		  'nome': 'Wifi',
//       		  'icone': 'fa-wifi'
//       		},     
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Facebook',
//         	  'icone': 'fa-facebook-square'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Instagram',
//       		  'icone': 'fa-instagram'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//       		  'nome': 'Site',
//       		  'icone': 'fa-globe'
//       		}, 
//       		{ 'tipo:' 'REFERÊNCIA DE CATEGORIA:',
//      		   'nome': 'Cifrão',
//       		  'icone': 'fa-dollar-sign'
//       		}
//     	   ]
// 	      },
// 	      {
// 	       categ: 'PASSEIOS' , value = 'pass' ,
// 	       items: [
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Cadeirante',
//       		  'icone': 'fa-wheelchair'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Auditivo',
//       		  'icone': 'fa-deaf'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Visual',
//       		  'icone': 'fa-blind'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-amex'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-diners-club'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-mastercard'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//      		  'icone': 'fa-cc-visa'
//      		 },
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//         	  'nome': 'Bar',
//                   'icone': 'fa-cocktail'
//       		},      
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//       		  'nome': 'Restaurante',
//       		  'icone': 'fa-utensils'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	'nome': 'Aceita-se pets',
//         	'icone': 'fa-paw'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Ar-condicionado',
//         	  'icone': 'fa-snowflake'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Estacionamento',
//         	 'icone': 'fa-parking'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Wifi',
//         	  'icone': 'fa-wifi'
//       		},     
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Facebook',
//         	  'icone': 'fa-facebook-square'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Instagram',
//         	  'icone': 'fa-instagram'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//       		  'nome': 'Site',
//       		  'icone': 'fa-globe'
//       		}, 
//       		{ 'tipo:' 'REFERÊNCIA DE CATEGORIA:',
//       		  'nome': 'Positivo',
//       		  'icone': 'fa-thumbs-up'
//       		}
//     	   ]
// 	      },
// 	      {
// 	       categ: 'ROTEIROS' , value = 'rote' ,
// 	       items: [
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Cadeirante',
//       		  'icone': 'fa-wheelchair'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Auditivo',
//       		  'icone': 'fa-deaf'
//       		},
//       		{ 'tipo': 'ACESSIBILIDADE:',
//       		  'nome': 'Def.Visual',
//       		  'icone': 'fa-blind'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-amex'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-diners-club'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//       		  'icone': 'fa-cc-mastercard'
//       		},
//       		{ 'tipo': 'ACEITA CARTÕES:',
//       		  'nome': 'Cartões de crédito',
//      		  'icone': 'fa-cc-visa'
//      		 },
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//         	  'nome': 'Bar',
//                   'icone': 'fa-cocktail'
//       		},      
//       		{ 'tipo': 'ALIMENTAÇÃO:',
//       		  'nome': 'Restaurante',
//       		  'icone': 'fa-utensils'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	'nome': 'Aceita-se pets',
//         	'icone': 'fa-paw'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Ar-condicionado',
//         	  'icone': 'fa-snowflake'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Estacionamento',
//         	 'icone': 'fa-parking'
//       		},      
//       		{ 'tipo': 'CONVENIÊNCIAS:',
//         	  'nome': 'Wifi',
//         	  'icone': 'fa-wifi'
//       		},     
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Facebook',
//         	  'icone': 'fa-facebook-square'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//         	  'nome': 'Instagram',
//         	  'icone': 'fa-instagram'
//       		}, 
//       		{ 'tipo:' 'REDES SOCIAIS:',
//       		  'nome': 'Site',
//       		  'icone': 'fa-globe'
//       		}, 
//       		{ 'tipo:' 'REFERÊNCIA DE CATEGORIA:',
//       		  'nome': 'Positivo',
//       		  'icone': 'fa-thumbs-up'
//       		}
//          ]
// 	       }
// ];

}
    
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
  // console.log(cep);
  let cep1 = cep.replace('_','');
  // console.log(cep1);
  if(cep1.length == 9){
    this.viacepService.search(cep.replace('-','')).subscribe(data => {
      // console.log(data);
      this.administradorGeral.logradouro = data.logradouro;
      this.administradorGeral.bairro = data.bairro;
      this.administradorGeral.cidade = data.localidade;
      this.administradorGeral.estado = data.uf;
    })
  }
 }

 onChange(event) {
  // console.log('event :' + event);
  // console.log(event.value);

      if (event.value == 'Hotéis'   
      ||  event.value == 'Hotéis Fazenda'
      ||  event.value == 'Motéis'
      ||  event.value == 'Pousadas'
      ||  event.value == 'Resorts'
      ||  event.value == 'Campings')
        { 
          var cat = 'hospedagem';
        }
  
   if (cat ==  'hospedagem')
      this.ca = this.categorias = [
        {cate: 'hospedagem' , tipo: 'ACESSIBILIDADE:', nome: 'Cadeirante'        , icone: 'fa-wheelchair'},
        {cate: 'hospedagem' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Visual'        , icone: 'fa-blind'},
        {cate: 'hospedagem' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Auditivo'      , icone: 'fa-deaf'},
        {cate: 'hospedagem' , tipo: 'ACEITA CARTÕES:', nome: 'Amex'              , icone: 'fa-cc-amex'},
        {cate: 'hospedagem' , tipo: 'ACEITA CARTÕES:', nome: 'Visa'              , icone: 'fa-cc-visa'},
        {cate: 'hospedagem' , tipo: 'ACEITA CARTÕES:', nome: 'Diners'            , icone: 'fa-cc-diners-club'},
        {cate: 'hospedagem' , tipo: 'ACEITA CARTÕES:', nome: 'Mastercard'        , icone: 'fa-cc-mastercard'},
        {cate: 'hospedagem' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Adega de Vinho'    , icone: 'fa-wine-bottle'},   
        {cate: 'hospedagem' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Bar'               , icone: 'fa-cocktail'},   
        {cate: 'hospedagem' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Restaurante'       , icone: 'fa-utensils'},
        {cate: 'hospedagem' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Café Manha Incluso', icone: 'fa-coffee'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Aceita-se pets'    , icone: 'fa-paw'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Estacionamento'    , icone: 'fa-parking'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Ar-condicionado'   , icone: 'fa-snowflake'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Wifi'              , icone: 'fa-wifi'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Carregador Malas'  , icone: 'fa-luggage-cart'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'espaço saúde'      , icone: 'fa-spa'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Frigobar'          , icone: 'fa-refrigerator'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Não Fumante'       , icone: 'fa-smoking-ban'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Piscina'           , icone: 'fa-swimming-pool'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Salão fitness'     , icone: 'fa-dumbbell'},
        {cate: 'hospedagem' , tipo: 'CONVENIÊNCIAS:' , nome: 'Serviço de Quarto' , icone: 'fa-concierge-bell'},
        {cate: 'hospedagem' , tipo: 'REDES SOCIAIS:' , nome: 'Facebook'          , icone: 'fa-facebook-square'},
        {cate: 'hospedagem' , tipo: 'REDES SOCIAIS:' , nome: 'Instagram'         , icone: 'fa-Instagram'},
        {cate: 'hospedagem' , tipo: 'REDES SOCIAIS:' , nome: 'Site'              , icone: 'fa-globe'},
        {cate: 'hospedagem' , tipo: 'REFERÊNCIA:'    , nome: 'Estrelas'          , icone: 'fa-star'}
      ];

      if (event.value == 'Bares/Lanches'   
      ||  event.value == 'Cafés/Docerias'
      ||  event.value == 'Cozinha Brasileira'
      ||  event.value == 'Cozinha Internacional'
      ||  event.value == 'Pizzarias'
      ||  event.value == 'Quiosques'
      ||  event.value == 'Demais Segmentos')

        { 
          var cat = 'gastronomia';
        }
  
   if (cat ==  'gastronomia')
      this.ca = this.categorias = [
        {cate: 'gastronomia' , tipo: 'ACESSIBILIDADE:', nome: 'Cadeirante'        , icone: 'fa-wheelchair'},
        {cate: 'gastronomia' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Visual'        , icone: 'fa-blind'},
        {cate: 'gastronomia' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Auditivo'      , icone: 'fa-deaf'},
        {cate: 'gastronomia' , tipo: 'ACEITA CARTÕES:', nome: 'Amex'              , icone: 'fa-cc-amex'},
        {cate: 'gastronomia' , tipo: 'ACEITA CARTÕES:', nome: 'Visa'              , icone: 'fa-cc-visa'},
        {cate: 'gastronomia' , tipo: 'ACEITA CARTÕES:', nome: 'Diners'            , icone: 'fa-cc-diners-club'},
        {cate: 'gastronomia' , tipo: 'ACEITA CARTÕES:', nome: 'Mastercard'        , icone: 'fa-cc-mastercard'},
        {cate: 'gastronomia' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Adega de Vinho'    , icone: 'fa-wine-bottle'},   
        {cate: 'gastronomia' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Bar'               , icone: 'fa-cocktail'},   
        {cate: 'gastronomia' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Restaurante'       , icone: 'fa-utensils'},
        {cate: 'gastronomia' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Café Manha Incluso', icone: 'fa-coffee'},
        {cate: 'gastronomia' , tipo: 'CONVENIÊNCIAS:' , nome: 'Aceita-se pets'    , icone: 'fa-paw'},
        {cate: 'gastronomia' , tipo: 'CONVENIÊNCIAS:' , nome: 'Estacionamento'    , icone: 'fa-parking'},
        {cate: 'gastronomia' , tipo: 'CONVENIÊNCIAS:' , nome: 'Ar-condicionado'   , icone: 'fa-snowflake'},
        {cate: 'gastronomia' , tipo: 'CONVENIÊNCIAS:' , nome: 'Wifi'              , icone: 'fa-wifi'},
        {cate: 'gastronomia' , tipo: 'REDES SOCIAIS:' , nome: 'Facebook'          , icone: 'fa-facebook-square'},
        {cate: 'gastronomia' , tipo: 'REDES SOCIAIS:' , nome: 'Instagram'         , icone: 'fa-Instagram'},
        {cate: 'gastronomia' , tipo: 'REDES SOCIAIS:' , nome: 'Site'              , icone: 'fa-globe'},
        {cate: 'gastronomia' , tipo: 'REFERÊNCIA:'    , nome: '$$$ Cifrão'        , icone: 'fa-dillar-sign'}
    ];

    if (event.value == 'Compras'   
    ||  event.value == 'Cultura'
    ||  event.value == 'Lazer'
    ||  event.value == 'Agências de Turismo')
      { 
        var cat = 'oquefazer';
      }

 if (cat ==  'oquefazer')
    this.ca = this.categorias = [
    {cate: 'oquefazer' , tipo: 'ACESSIBILIDADE:', nome: 'Cadeirante'        , icone: 'fa-wheelchair'},
    {cate: 'oquefazer' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Visual'        , icone: 'fa-blind'},
    {cate: 'oquefazer' , tipo: 'ACESSIBILIDADE:', nome: 'Def.Auditivo'      , icone: 'fa-deaf'},
    {cate: 'oquefazer' , tipo: 'ACEITA CARTÕES:', nome: 'Amex'              , icone: 'fa-cc-amex'},
    {cate: 'oquefazer' , tipo: 'ACEITA CARTÕES:', nome: 'Visa'              , icone: 'fa-cc-visa'},
    {cate: 'oquefazer' , tipo: 'ACEITA CARTÕES:', nome: 'Diners'            , icone: 'fa-cc-diners-club'},
    {cate: 'oquefazer' , tipo: 'ACEITA CARTÕES:', nome: 'Mastercard'        , icone: 'fa-cc-mastercard'},
    {cate: 'oquefazer' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Restaurante'       , icone: 'fa-utensils'},
    {cate: 'oquefazer' , tipo: 'ALIMENTAÇÃO:'   , nome: 'Bar'               , icone: 'fa-cocktail'},
    {cate: 'oquefazer' , tipo: 'CONVENIÊNCIAS:' , nome: 'Aceita-se pets'    , icone: 'fa-paw'},
    {cate: 'oquefazer' , tipo: 'CONVENIÊNCIAS:' , nome: 'Estacionamento'    , icone: 'fa-parking'},
    {cate: 'oquefazer' , tipo: 'CONVENIÊNCIAS:' , nome: 'Ar-condicionado'   , icone: 'fa-snowflake'},
    {cate: 'oquefazer' , tipo: 'CONVENIÊNCIAS:' , nome: 'Wifi'              , icone: 'fa-wifi'},
    {cate: 'oquefazer' , tipo: 'REDES SOCIAIS:' , nome: 'Facebook'          , icone: 'fa-facebook-square'},
    {cate: 'oquefazer' , tipo: 'REDES SOCIAIS:' , nome: 'Instagram'         , icone: 'fa-Instagram'},
    {cate: 'oquefazer' , tipo: 'REDES SOCIAIS:' , nome: 'Site'              , icone: 'fa-globe'},
    {cate: 'oquefazer' , tipo: 'REFERÊNCIA:'    , nome: 'Positivo'          , icone: 'fa-thumbs-up'}
    ];

    if (event.value == 'Aventuras'   
    ||  event.value == 'Destilarias'
    ||  event.value == 'Equestres'
    ||  event.value == 'Flores e Frutas'
    ||  event.value == 'Pesqueiros'
    ||  event.value == 'Religioso'
    ||  event.value == 'Rural')
      { 
        var cat = 'roteiros';
      }

    if (cat ==  'roteiros')
    this.ca = this.categorias = [
      {cate: 'roteiros', tipo: 'ACESSIBILIDADE:', nome: 'Cadeirante'        , icone: 'fa-wheelchair'},
      {cate: 'roteiros', tipo: 'ACESSIBILIDADE:', nome: 'Def.Visual'        , icone: 'fa-blind'},
      {cate: 'roteiros', tipo: 'ACESSIBILIDADE:', nome: 'Def.Auditivo'      , icone: 'fa-deaf'},
      {cate: 'roteiros', tipo: 'ACEITA CARTÕES:', nome: 'Amex'              , icone: 'fa-cc-amex'},
      {cate: 'roteiros', tipo: 'ACEITA CARTÕES:', nome: 'Visa'              , icone: 'fa-cc-visa'},
      {cate: 'roteiros', tipo: 'ACEITA CARTÕES:', nome: 'Diners'            , icone: 'fa-cc-diners-club'},
      {cate: 'roteiros', tipo: 'ACEITA CARTÕES:', nome: 'Mastercard'        , icone: 'fa-cc-mastercard'},
      {cate: 'roteiros', tipo: 'ALIMENTAÇÃO:'   , nome: 'Restaurante'       , icone: 'fa-utensils'},
      {cate: 'roteiros', tipo: 'ALIMENTAÇÃO:'   , nome: 'Bar'               , icone: 'fa-cocktail'},
      {cate: 'roteiros', tipo: 'CONVENIÊNCIAS:' , nome: 'Aceita-se pets'    , icone: 'fa-paw'},
      {cate: 'roteiros', tipo: 'CONVENIÊNCIAS:' , nome: 'Estacionamento'    , icone: 'fa-parking'},
      {cate: 'roteiros', tipo: 'CONVENIÊNCIAS:' , nome: 'Ar-condicionado'   , icone: 'fa-snowflake'},
      {cate: 'roteiros', tipo: 'CONVENIÊNCIAS:' , nome: 'Wifi'              , icone: 'fa-wifi'},
      {cate: 'roteiros', tipo: 'REDES SOCIAIS:' , nome: 'Facebook'          , icone: 'fa-facebook-square'},
      {cate: 'roteiros', tipo: 'REDES SOCIAIS:' , nome: 'Instagram'         , icone: 'fa-Instagram'},
      {cate: 'roteiros', tipo: 'REDES SOCIAIS:' , nome: 'Site'              , icone: 'fa-globe'},
      {cate: 'roteiros', tipo: 'REFERÊNCIA:'    , nome: 'Positivo'          , icone: 'fa-thumbs-up'}
    ];  
   }
 }


