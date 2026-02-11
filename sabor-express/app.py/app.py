import os

# Lista de dicionários representando os restaurantes
restaurantes = [
    {'nome': 'Praça', 'categoria': 'Japonesa', 'ativo': False},
    {'nome': 'Pizza Suprema', 'categoria': 'Pizza', 'ativo': True},
    {'nome': 'Marmitaria Claudio', 'categoria': 'Marmita', 'ativo': False}
]

def exibir_nome_do_programa():
    '''
    Essa função exibe o nome do programa
    '''
    print("""
    █▀ ▄▀█ █▄▄ █▀█ █▀█   █▀▀ ▀▄▀ █▀█ █▀█ █▀▀ █▀ █▀
    ▄█ █▀█ █▄█ █▄█ █▀▄   ██▄ █░█ █▀▀ █▀▄ ██▄ ▄█ ▄█
    """)

def exibir_opcoes():
    print("1. Cadastrar restaurante")
    print("2. Listar Restaurante")
    print("3. Alternar estado do restaurante")
    print("4. Sair\n")

def finalizar_app():
    '''
    finaliza o app
    '''
    exibir_subtitulo('Finalizando programa...')

def voltar_ao_menu_principal():
    '''
    voltar ao menu principal
    '''
    input("\nDigite qualquer tecla para voltar ao menu principal ")
    main()

def exibir_subtitulo(texto):
    os.system('cls' if os.name == 'nt' else 'clear') 
    linha = '*' * (len(texto) + 4)
    print(linha)
    print(texto)
    print(linha)
    print()

def cadastrar_novo_restaurante():
    '''
    Essa função cadastra um restaurante
    
    inputs
    -nome do restaurante
    -Categoria
    
    inputs
    -Adiciona um novo restaurante a lista de restaurante
    '''
    exibir_subtitulo('Cadastro de novos restaurantes')
    nome_do_restaurante = input("Digite o nome do restaurante: ")
    categoria = input(f'Digite a categoria do {nome_do_restaurante}: ')
    
    
    dados_do_restaurante = {'nome': nome_do_restaurante, 'categoria': categoria, 'ativo': False}
    restaurantes.append(dados_do_restaurante)
    
    print(f"O restaurante {nome_do_restaurante} foi cadastrado com sucesso!")
    voltar_ao_menu_principal()

def listar_restaurantes():
    '''
    Essa função lista os restaurantes
    '''
    exibir_subtitulo('Listando os restaurantes')
    
    # Cabeçalho da tabela
    print(f"{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(20)} | Status")
    print("-" * 60)

    for restaurante in restaurantes:
        nome = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = 'Ativado' if restaurante['ativo'] else 'Desativado'
        print(f"{nome.ljust(22)} | {categoria.ljust(20)} | {ativo}")
    
    voltar_ao_menu_principal()

def alternar_estado_do_restaurante():
    '''
    Essa função alternar estado dos restaurantes
    '''
    exibir_subtitulo('Alterando estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alternar o estado: ')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante.upper() == restaurante['nome'].upper():
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f"O restaurante {nome_restaurante} foi ativado!" if restaurante['ativo'] else f"O restaurante {nome_restaurante} foi desativado!"
            print(mensagem)
            break # Encontrou, pode parar o loop

    if not restaurante_encontrado:
        print('O restaurante não foi encontrado.')
    
    voltar_ao_menu_principal()
    ''' voltar ao menu principal '''

def opcao_invalida():
    '''
    Essa função monstra as opçoes invalidas
    '''
    print("Opção inválida!\n")
    voltar_ao_menu_principal()

def escolher_opcao():
    try:
        opcao_escolhida = int(input('Escolha uma opção: '))
        
        if opcao_escolhida == 1:
            cadastrar_novo_restaurante()
        elif opcao_escolhida == 2:
            listar_restaurantes()
        elif opcao_escolhida == 3:
            alternar_estado_do_restaurante()
        elif opcao_escolhida == 4:
            finalizar_app()
        else:
            opcao_invalida()
    except ValueError:
        opcao_invalida()

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    exibir_nome_do_programa()
    exibir_opcoes()
    escolher_opcao()

if __name__ == "__main__":
    main()