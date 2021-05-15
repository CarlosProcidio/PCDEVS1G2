import { faWheelchair, faDeaf, faBlind, faWineBottle, faCoffee, faUtensils, faPaw, faSnowflake, faLuggageCart, faSpa, faParking, faSmoking, faSmokingBan, faGlobe, faWifi, faSwimmingPool, faDumbbell, faConciergeBell, faMoneyCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { ViacepService } from '../../shared/viacep.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdministradorService } from '../administrador.service';
import { MessageService, SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})

export class FormularioComponent implements OnInit {

  faWeelchair = faWheelchair;
  faDeaf = faDeaf
  faBlind = faBlind;
  faWineBottle = faWineBottle;
  faCoffee = faCoffee;
  faUtensils = faUtensils;
  faPaw = faPaw;
  faSnowflake = faSnowflake;
  faLuggageCart = faLuggageCart;
  faSpa = faSpa
  faParking = faParking;
  faSmoking = faSmoking;
  faSmokingBna = faSmokingBan;
  faGlobe = faGlobe;
  fawifi = faWifi;
  faSwimmimngPool = faSwimmingPool;
  faDumbbell = faDumbbell;
  faConciergeBell = faConciergeBell;
  faMoneyCheck = faMoneyCheck;
  faStar = faStar;

  administradorGeral: any = {
    id: "",
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",
    responsavel: "",
    email: "",
    site: "",
    telefoneFixo: "",
    telefoneCel: "",
    descricao: "",
    categoria: "",
    segmento: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    mapa: "",
    referencia: "",
    horario: "",
    status:""
  }

  ca: any = [];
  codigoCliente: any;
  categorias: any;
  operacao: boolean = true;
  arrayServico: any[] = []; // array de serviços para carga na tabela de serviços
  grupoCategoria: SelectItemGroup[];
  status: any [] = [];


  constructor(
    private service: AdministradorService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    private router: Router,
    private viacepService: ViacepService
    //    private formBuilder: FormBuilder
  ) {

    this.status = [
      {label: "Pendente", value:"Pendente"},
      {label: "Aprovado", value:"Aprovado"}
    ]
    this.grupoCategoria = [
      {
        label: 'GASTRONOMIA', value: 'gastronomia',
        items: [
          { label: 'Bares/Lanches', value: 'Bares/Lanches' },
          { label: 'Cafés/Docerias', value: 'Cafés/Docerias' },
          { label: 'Cozinha Brasileira', value: 'Cozinha Brasileira' },
          { label: 'Cozinha Internacional', value: 'Cozinha Internacional' },
          { label: 'Pizzarias', value: 'Pizzarias' },
          { label: 'Quiosques', value: 'Quiosques' },
          { label: 'Demais Segmentos', value: 'Demais Segmentos' }
        ]
      },
      {
        label: 'HOSPEDAGEM', value: 'hospedagem',
        items: [
          { label: 'Hotéis', value: 'Hotéis' },
          { label: 'Hotéis Fazenda', value: 'Hotéis Fazenda' },
          { label: 'Motéis', value: 'Motéis' },
          { label: 'Pousadas', value: 'Pousadas' },
          { label: 'Resorts', value: 'Resorts' },
          { label: 'Campings', value: 'Campings' }
        ]
      },
      {
        label: 'O QUE FAZER', value: 'oquefazer',
        items: [
          { label: 'Compras', value: 'Compras' },
          { label: 'Cultura', value: 'Cultura' },
          { label: 'Lazer', value: 'Lazer' },
          { label: 'Agências de Turismo', value: 'Agências de Turismo' }
        ]
      },
      {
        label: 'ROTEIROS', value: 'roteiros',
        items: [
          { label: 'Aventuras', value: 'Aventuras' },
          { label: 'Destilarias', value: 'Destilarias' },
          { label: 'Equestres', value: 'Equestres' },
          { label: 'Flores e Frutas', value: 'Flores e Frutas' },
          { label: 'Pesqueiros', value: 'Pesqueiros' },
          { label: 'Religioso', value: 'Religioso' },
          { label: 'Rural', value: 'Rural' }
        ]
      },
      {
        label: 'PREFEITURA', value: 'pr',
        items: [
          { label: 'Público', value: 'Público' }
        ]
      }
    ];
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

  carregarCliente(codigoCliente: number) {
    this.service.buscarById(codigoCliente).subscribe(resposta => {
      this.administradorGeral = <any>resposta;
      this.onChange(this.administradorGeral.segmento);
      this.arrayServico = this.administradorGeral.servicos;
      this.title.setTitle(`Edição do cliente: ${this.administradorGeral.id}`);
    });
  }

  cadastrarOuAtualizar() {
    if (this.operacao) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {
    this.administradorGeral.servicos = this.arrayServico;

    console.log()

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

  atualizar() {

    this.administradorGeral.servicos = this.arrayServico;

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

  buscarCep(cep: any) {
    let cep1 = cep.replace('_', '');
    if (cep1.length == 9) {
      this.viacepService.search(cep.replace('-', '')).subscribe(data => {
        console.log(data);
        this.administradorGeral.logradouro = data.logradouro;
        this.administradorGeral.bairro = data.bairro;
        this.administradorGeral.cidade = data.localidade;
        this.administradorGeral.estado = data.uf;
      })
    }
    console.log(ViacepService);
  }

  onChange(segmento) {
    if (segmento == 'Hotéis'
      || segmento == 'Hotéis Fazenda'
      || segmento == 'Motéis'
      || segmento == 'Pousadas'
      || segmento == 'Resorts'
      || segmento == 'Campings') {
      var cat = 'hospedagem';
    }

    if (cat == 'hospedagem')
      this.ca = this.categorias = [
        { cate: 'hospedagem', subCat: 'ACESSIBILIDADE:', nome: 'Cadeirante', icone: 'fa-wheelchair' },
        { cate: 'hospedagem', subCat: 'ACESSIBILIDADE:', nome: 'Def.Visual', icone: 'fa-blind' },
        { cate: 'hospedagem', subCat: 'ACESSIBILIDADE:', nome: 'Def.Auditivo', icone: 'fa-deaf' },
        { cate: 'hospedagem', subCat: 'ACEITA CARTÕES:', nome: 'Amex', icone: 'fa-cc-amex' },
        { cate: 'hospedagem', subCat: 'ACEITA CARTÕES:', nome: 'Visa', icone: 'fa-cc-visa' },
        { cate: 'hospedagem', subCat: 'ACEITA CARTÕES:', nome: 'Diners', icone: 'fa-cc-diners-club' },
        { cate: 'hospedagem', subCat: 'ACEITA CARTÕES:', nome: 'Mastercard', icone: 'fa-cc-mastercard' },
        { cate: 'hospedagem', subCat: 'ALIMENTAÇÃO:', nome: 'Adega de Vinho', icone: 'fa-wine-bottle' },
        { cate: 'hospedagem', subCat: 'ALIMENTAÇÃO:', nome: 'Bar', icone: 'fa-cocktail' },
        { cate: 'hospedagem', subCat: 'ALIMENTAÇÃO:', nome: 'Restaurante', icone: 'fa-utensils' },
        { cate: 'hospedagem', subCat: 'ALIMENTAÇÃO:', nome: 'Café Manha Incluso', icone: 'fa-coffee' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Aceita-se pets', icone: 'fa-paw' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Estacionamento', icone: 'fa-parking' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Ar-condicionado', icone: 'fa-snowflake' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Wifi', icone: 'fa-wifi' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Carregador Malas', icone: 'fa-luggage-cart' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Espaço Saúde', icone: 'fa-spa' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Frigobar', icone: 'fa-refrigerator' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Não Fumante', icone: 'fa-smoking-ban' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Piscina', icone: 'fa-swimming-pool' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Salão fitness', icone: 'fa-dumbbell' },
        { cate: 'hospedagem', subCat: 'CONVENIÊNCIAS:', nome: 'Serviço de Quarto', icone: 'fa-concierge-bell' },
        { cate: 'hospedagem', subCat: 'REDES SOCIAIS:', nome: 'Facebook', icone: 'fa-facebook-square' },
        { cate: 'hospedagem', subCat: 'REDES SOCIAIS:', nome: 'Instagram', icone: 'fa-Instagram' },
        { cate: 'hospedagem', subCat: 'REDES SOCIAIS:', nome: 'Site', icone: 'fa-globe' },
        { cate: 'hospedagem', subCat: 'REFERÊNCIA:', nome: 'Estrelas', icone: 'fa-star' }
      ];

    if (segmento == 'Bares/Lanches'
      || segmento == 'Cafés/Docerias'
      || segmento == 'Cozinha Brasileira'
      || segmento == 'Cozinha Internacional'
      || segmento == 'Pizzarias'
      || segmento == 'Quiosques'
      || segmento == 'Demais Segmentos') {
      cat = 'gastronomia';
    }

    if (cat == 'gastronomia')
      this.ca = this.categorias = [
        { cate: 'gastronomia', subCat: 'ACESSIBILIDADE:', nome: 'Cadeirante', icone: 'fa-wheelchair' },
        { cate: 'gastronomia', subCat: 'ACESSIBILIDADE:', nome: 'Def.Visual', icone: 'fa-blind' },
        { cate: 'gastronomia', subCat: 'ACESSIBILIDADE:', nome: 'Def.Auditivo', icone: 'fa-deaf' },
        { cate: 'gastronomia', subCat: 'ACEITA CARTÕES:', nome: 'Amex', icone: 'fa-cc-amex' },
        { cate: 'gastronomia', subCat: 'ACEITA CARTÕES:', nome: 'Visa', icone: 'fa-cc-visa' },
        { cate: 'gastronomia', subCat: 'ACEITA CARTÕES:', nome: 'Diners', icone: 'fa-cc-diners-club' },
        { cate: 'gastronomia', subCat: 'ACEITA CARTÕES:', nome: 'Mastercard', icone: 'fa-cc-mastercard' },
        { cate: 'gastronomia', subCat: 'ALIMENTAÇÃO:', nome: 'Adega de Vinho', icone: 'fa-wine-bottle' },
        { cate: 'gastronomia', subCat: 'ALIMENTAÇÃO:', nome: 'Bar', icone: 'fa-cocktail' },
        { cate: 'gastronomia', subCat: 'ALIMENTAÇÃO:', nome: 'Restaurante', icone: 'fa-utensils' },
        { cate: 'gastronomia', subCat: 'ALIMENTAÇÃO:', nome: 'Café Manha Incluso', icone: 'fa-coffee' },
        { cate: 'gastronomia', subCat: 'CONVENIÊNCIAS:', nome: 'Aceita-se pets', icone: 'fa-paw' },
        { cate: 'gastronomia', subCat: 'CONVENIÊNCIAS:', nome: 'Estacionamento', icone: 'fa-parking' },
        { cate: 'gastronomia', subCat: 'CONVENIÊNCIAS:', nome: 'Ar-condicionado', icone: 'fa-snowflake' },
        { cate: 'gastronomia', subCat: 'CONVENIÊNCIAS:', nome: 'Wifi', icone: 'fa-wifi' },
        { cate: 'gastronomia', subCat: 'REDES SOCIAIS:', nome: 'Facebook', icone: 'fa-facebook-square' },
        { cate: 'gastronomia', subCat: 'REDES SOCIAIS:', nome: 'Instagram', icone: 'fa-Instagram' },
        { cate: 'gastronomia', subCat: 'REDES SOCIAIS:', nome: 'Site', icone: 'fa-globe' },
        { cate: 'gastronomia', subCat: 'REFERÊNCIA:', nome: '$$$ Cifrão', icone: 'fa-dollar-sign' }
      ];

    if (segmento == 'Compras'
      || segmento == 'Cultura'
      || segmento == 'Lazer'
      || segmento == 'Agências de Turismo') {
      cat = 'oquefazer';
    }

    if (cat == 'oquefazer')
      this.ca = this.categorias = [
        { cate: 'oquefazer', subCat: 'ACESSIBILIDADE:', nome: 'Cadeirante', icone: 'fa-wheelchair' },
        { cate: 'oquefazer', subCat: 'ACESSIBILIDADE:', nome: 'Def.Visual', icone: 'fa-blind' },
        { cate: 'oquefazer', subCat: 'ACESSIBILIDADE:', nome: 'Def.Auditivo', icone: 'fa-deaf' },
        { cate: 'oquefazer', subCat: 'ACEITA CARTÕES:', nome: 'Amex', icone: 'fa-cc-amex' },
        { cate: 'oquefazer', subCat: 'ACEITA CARTÕES:', nome: 'Visa', icone: 'fa-cc-visa' },
        { cate: 'oquefazer', subCat: 'ACEITA CARTÕES:', nome: 'Diners', icone: 'fa-cc-diners-club' },
        { cate: 'oquefazer', subCat: 'ACEITA CARTÕES:', nome: 'Mastercard', icone: 'fa-cc-mastercard' },
        { cate: 'oquefazer', subCat: 'ALIMENTAÇÃO:', nome: 'Restaurante', icone: 'fa-utensils' },
        { cate: 'oquefazer', subCat: 'ALIMENTAÇÃO:', nome: 'Bar', icone: 'fa-cocktail' },
        { cate: 'oquefazer', subCat: 'CONVENIÊNCIAS:', nome: 'Aceita-se pets', icone: 'fa-paw' },
        { cate: 'oquefazer', subCat: 'CONVENIÊNCIAS:', nome: 'Estacionamento', icone: 'fa-parking' },
        { cate: 'oquefazer', subCat: 'CONVENIÊNCIAS:', nome: 'Ar-condicionado', icone: 'fa-snowflake' },
        { cate: 'oquefazer', subCat: 'CONVENIÊNCIAS:', nome: 'Wifi', icone: 'fa-wifi' },
        { cate: 'oquefazer', subCat: 'REDES SOCIAIS:', nome: 'Facebook', icone: 'fa-facebook-square' },
        { cate: 'oquefazer', subCat: 'REDES SOCIAIS:', nome: 'Instagram', icone: 'fa-Instagram' },
        { cate: 'oquefazer', subCat: 'REDES SOCIAIS:', nome: 'Site', icone: 'fa-globe' },
        { cate: 'oquefazer', subCat: 'REFERÊNCIA:', nome: 'Positivo', icone: 'fa-thumbs-up' }
      ];

    if (segmento == 'Aventuras'
      || segmento == 'Destilarias'
      || segmento == 'Equestres'
      || segmento == 'Flores e Frutas'
      || segmento == 'Pesqueiros'
      || segmento == 'Religioso'
      || segmento == 'Rural') {
      cat = 'roteiros';
    }

    if (cat == 'roteiros')
      this.ca = this.categorias = [
        { cate: 'roteiros', subCat: 'ACESSIBILIDADE:', nome: 'Cadeirante', icone: 'fa-wheelchair' },
        { cate: 'roteiros', subCat: 'ACESSIBILIDADE:', nome: 'Def.Visual', icone: 'fa-blind' },
        { cate: 'roteiros', subCat: 'ACESSIBILIDADE:', nome: 'Def.Auditivo', icone: 'fa-deaf' },
        { cate: 'roteiros', subCat: 'ACEITA CARTÕES:', nome: 'Amex', icone: 'fa-cc-amex' },
        { cate: 'roteiros', subCat: 'ACEITA CARTÕES:', nome: 'Visa', icone: 'fa-cc-visa' },
        { cate: 'roteiros', subCat: 'ACEITA CARTÕES:', nome: 'Diners', icone: 'fa-cc-diners-club' },
        { cate: 'roteiros', subCat: 'ACEITA CARTÕES:', nome: 'Mastercard', icone: 'fa-cc-mastercard' },
        { cate: 'roteiros', subCat: 'ALIMENTAÇÃO:', nome: 'Restaurante', icone: 'fa-utensils' },
        { cate: 'roteiros', subCat: 'ALIMENTAÇÃO:', nome: 'Bar', icone: 'fa-cocktail' },
        { cate: 'roteiros', subCat: 'CONVENIÊNCIAS:', nome: 'Aceita-se pets', icone: 'fa-paw' },
        { cate: 'roteiros', subCat: 'CONVENIÊNCIAS:', nome: 'Estacionamento', icone: 'fa-parking' },
        { cate: 'roteiros', subCat: 'CONVENIÊNCIAS:', nome: 'Ar-condicionado', icone: 'fa-snowflake' },
        { cate: 'roteiros', subCat: 'CONVENIÊNCIAS:', nome: 'Wifi', icone: 'fa-wifi' },
        { cate: 'roteiros', subCat: 'REDES SOCIAIS:', nome: 'Facebook', icone: 'fa-facebook-square' },
        { cate: 'roteiros', subCat: 'REDES SOCIAIS:', nome: 'Instagram', icone: 'fa-Instagram' },
        { cate: 'roteiros', subCat: 'REDES SOCIAIS:', nome: 'Site', icone: 'fa-globe' },
        { cate: 'roteiros', subCat: 'REFERÊNCIA:', nome: 'Positivo', icone: 'fa-thumbs-up' }
      ];

    this.administradorGeral.categoria = cat;
    this.administradorGeral.segmento = segmento;

  }


  gravarServico(event, item) {

    if (event.target.checked) {
      this.arrayServico.push(item.nome)
    } else {
      this.arrayServico.splice(this.arrayServico.indexOf(item.nome), 1)
    }
    console.log(this.arrayServico);

  }
}


