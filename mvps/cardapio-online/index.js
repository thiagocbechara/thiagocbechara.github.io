const drawCategory = (category) => {
    const categoryTemplate = `<div class="category mt-3">
                                  <h4 class="text-primary">{{category-name}}</h4>
                                  <ul class="list-group list-group-flush">
                                    {{category-items}}
                                  </ul>
                              </div>`;
    let items = '';
    for (let item of category.items) {
        items += drawItem(item);
    }
    return categoryTemplate
        .replace('{{category-name}}', category.nome)
        .replace('{{category-items}}', items);
};

const drawItem = (item) => {
    const itemTemplate = `<li class="list-group-item">
                            <div class="d-flex w-100 justify-content-between">
                                <h6 class="mb-1">
                                    <span>{{item-code}}</span>
                                    {{item-name}}
                                    <small>{{item-quantity}}</small>
                                </h6>
                                <small>R$ {{item-price}}</small>
                            </div>
                            <small>{{item-description}}</small>
                        </li>`;
    let itemNode = itemTemplate
        .replace('{{item-code}}', item.code ? `${item.code} -` : '')
        .replace('{{item-name}}', item.nome)
        .replace('{{item-quantity}}', item.quantidade ? `(${item.quantidade})` : '')
        .replace('{{item-price}}', item.preco)
        .replace('{{item-description}}', item.descricao || '');
    return itemNode;
};

$(document).ready(() => {
    let items = [
        {
            nome: 'Festival',
            items: [{ nome: 'Adulto', preco: '69,90' }, { nome: 'Infantil', preco: '34,90' }]
        },
        {
            nome: 'Entradas',
            items: [
                {
                    codigo: '100',
                    nome: 'Ceviche',
                    descricao: 'Salmão mariano no limão, laranja e especiarias',
                    quantidade: '1 un',
                    preco: '17,90'
                },
                {
                    codigo: '101',
                    nome: 'Ceviche Peixe Branco',
                    descricao: 'Peixe branco mariano no limão, laranja, tomate cereja e especiarias',
                    quantidade: '1 un',
                    preco: '18,90'
                },
                {
                    codigo: '102',
                    nome: 'Ceviche ao leite de coco',
                    descricao: 'Salmão mariano no limão e leite de coco, abacaxi e especiarias',
                    quantidade: '1 un',
                    preco: '18,90'
                },
                {
                    codigo: '103',
                    nome: 'Sunomono',
                    descricao: 'Pepino japonês na conserva com kani e gergilim',
                    quantidade: '1 un',
                    preco: '7,90'
                },
                {
                    codigo: '104',
                    nome: 'Salada <strong>MASAAKI</strong>',
                    descricao: 'Cenoura, pepino, kani, salmão grelhado e especiarias',
                    quantidade: '1 un',
                    preco: '12,90'
                },
                {
                    codigo: '105',
                    nome: 'Guioza',
                    descricao: 'Pastel de carne japonês',
                    quantidade: '4 un',
                    preco: '13,90'
                },
                {
                    codigo: '106',
                    nome: 'Shimeji',
                    descricao: 'Cogumelo refogado na manteiga, sake mirim e shoyu',
                    preco: '19,90'
                },
            ]
        },
        {
            nome: 'Especialidades',
            items: [
                {
                    codigo: '200',
                    nome: 'Sashimi selado',
                    descricao: 'Salmão com geleia de pimenta',
                    quantidade: '4 un',
                    preco: '12,90'
                },
                {
                    codigo: '201',
                    nome: 'Niguiri selado',
                    descricao: 'Salmão com geleia de pimenta',
                    quantidade: '4 un',
                    preco: '14,90'
                },
                {
                    codigo: '202',
                    nome: 'Togu',
                    descricao: 'Holl de salmão selado com recheio de alho poró, cream cheese e geleia de pimenta',
                    quantidade: '4 un',
                    preco: '15,90'
                },
                {
                    codigo: '203',
                    nome: 'Tokai ',
                    descricao: 'Holl de salmão selado com recheio de kani, cream cheese e geleia de pimenta',
                    quantidade: '4 un',
                    preco: '15,90'
                },
                {
                    codigo: '204',
                    nome: 'Tokai de abacaxi',
                    descricao: 'Holl de salmão selado com recheio de abacaxi e cream cheese',
                    quantidade: '4 un',
                    preco: '15,90'
                },
                {
                    codigo: '205',
                    nome: 'Especial <strong>MASAAKI</strong>',
                    descricao: 'Holl selado com recheio de skin com pasta de alho poró e geleia de pimenta',
                    quantidade: '8 un',
                    preco: '18,90'
                },
                {
                    codigo: '206',
                    nome: 'Dyo\'s',
                    descricao: 'Enrolado de salmão  com cebolinha',
                    quantidade: '4 un',
                    preco: '14,90'
                },
                {
                    codigo: '207',
                    nome: 'Dyo\'s camarão',
                    descricao: 'Enrolado de salmão com camarão e cream cheese',
                    quantidade: '4 un',
                    preco: '15,90'
                }
            ]
        },
        {
            nome: 'Hots',
            items: [
                {
                    codigo: '300',
                    nome: 'Hot filadélfia',
                    descricao: 'Salmão, cream cheese, cebolinha e molho tarê',
                    quantidade: '8 un',
                    preco: '14,90' 
                },
                {
                    codigo: '301',
                    nome: 'Hot holl',
                    descricao: 'Salmão, cream cheese, cebolinha, kani e molho tarê',
                    quantidade: '10 un',
                    preco: '17,90' 
                },
                {
                    codigo: '302',
                    nome: 'Hot gambey',
                    descricao: 'Salmão, cebolinha, cream cheese, couve e molho tarê',
                    quantidade: '8 un',
                    preco: '17,90' 
                },
                {
                    codigo: '303',
                    nome: 'Hot banana',
                    descricao: 'Banana com cream cheese, leite condensado ou nutella',
                    quantidade: '8 un',
                    preco: '14,90' 
                },
                {
                    codigo: '304',
                    nome: 'Hot morango',
                    descricao: 'Morango com cream cheese, leite condensado ou nutela',
                    quantidade: '8 un',
                    preco: '14,90' 
                }
            ]
        },
        {
            nome: 'Hossomaki',
            items:[
                {
                    codigo: '400',
                    nome: 'Salmão',
                    quantidade: '8 un',
                    preco: '12,00'
                },
                {
                    codigo: '401',
                    nome: 'Kani',
                    quantidade: '8 un',
                    preco: '12,00'
                },
                {
                    codigo: '402',
                    nome: 'Pepino',
                    quantidade: '8 un',
                    preco: '12,00'
                },
                {
                    codigo: '403',
                    nome: 'Filadélfia',
                    quantidade: '8 un',
                    preco: '12,00'
                },
                {
                    codigo: '404',
                    nome: 'Peixe branco',
                    quantidade: '8 un',
                    preco: '12,00'
                },
                {
                    codigo: '405',
                    nome: 'Atum',
                    quantidade: '8 un',
                    preco: '12,00'
                }
            ]
        },
        {
            nome: 'Uramaki',
            items: [
                {
                    codigo: '500',
                    nome: 'Filadélfia',
                    descricao: 'Salmão, cream cheese e cebolinha',
                    quantidade: '8 un',
                    preco: '16,90'
                },
                {
                    codigo: '501',
                    nome: 'Skin',
                    descricao: 'Pele de salmão grelhado e molho tarê',
                    quantidade: '8 un',
                    preco: '16,00'
                },
                {
                    codigo: '502',
                    nome: 'Califórnia',
                    descricao: 'Manga, pepino e kani',
                    quantidade: '8 un',
                    preco: '16,00'
                },
                {
                    codigo: '503',
                    nome: 'Romeu e Julieta',
                    descricao: 'Cream cheese com goiabada e morango',
                    quantidade: '8 un',
                    preco: '15,00'
                },
                {
                    codigo: '504',
                    nome: 'Salada',
                    descricao: 'Peixe temperado com alface e maionese',
                    quantidade: '8 un',
                    preco: '15,00'
                },
                {
                    codigo: '505',
                    nome: 'Brócolis selado',
                    descricao: 'Holl de salmão selado com recheio de brócolis no alho e óleo com geleia de pimenta',
                    quantidade: '8 un',
                    preco: '18,00'
                },
                {
                    codigo: '506',
                    nome: 'Camarão',
                    descricao: 'Camarão, cream cheese e alface',
                    quantidade: '8 un',
                    preco: '18,00'
                },
                {
                    codigo: '507',
                    nome: '<strong>MASAAKI</strong>',
                    descricao: 'Rúcula, salmão, cebolinha, cebola roxa e especiarias',
                    quantidade: '16,00',
                    preco: '8 un'
                },
                {
                    codigo: '508',
                    nome: 'Abacaxi selado',
                    descricao: 'Abacaxi, cream cheese, salmão selado e molho tarê',
                    quantidade: '8 un',
                    preco: '16,00'
                },
                {
                    codigo: '509',
                    nome: 'Supremo',
                    descricao: 'Holl de peixe branco sem algas, com recheio de salmão, cream cheese e raspas de limão',
                    quantidade: '8 un',
                    preco: '22,00'
                },
                {
                    codigo: '510',
                    nome: 'Acelga',
                    descricao: 'Holl de acelga com salmão, cream cheese, couve desidratada e molho tarê',
                    quantidade: '8 un',
                    preco: '18,00'
                },
                {
                    codigo: '511',
                    nome: 'Tomate seco',
                    descricao: 'Salmão com tomate seco, cream cheese e rúcula',
                    quantidade: '8 un',
                    preco: '17,00'
                },
                {
                    codigo: '512',
                    nome: 'Morango',
                    descricao: 'Morango com cream cheese e nutella',
                    quantidade: '8 un',
                    preco: '16,90'
                },
                {
                    codigo: '513',
                    nome: 'Morango especial',
                    descricao: 'Morango com raspas de laranja e chantilly',
                    quantidade: '8 un',
                    preco: '16,90'
                },
                {
                    codigo: '514',
                    nome: 'Banana',
                    descricao: 'Banana com chantilly e canela',
                    quantidade: '8 un',
                    preco: '15,00'
                },
            ]
        }
    ]

    let content = '';
    for (let categoria of items) {
        content += drawCategory(categoria);
    }
    $('.content').append($(content));
});