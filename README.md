# 🛍️ HsStore - Loja Virtual de Tecnologia

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Component%20Library-blue)
![Next Auth](https://img.shields.io/badge/Next-Auth-green)

Uma loja virtual moderna e completa especializada em produtos de tecnologia, desenvolvida com as mais recentes tecnologias do ecossistema React/Next.js.

## 🎯 Preview do Projeto

<div align="center">
  <h3>📱 Interface Completa da Loja Virtual</h3>
  
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 30px 0; max-width: 900px; margin-left: auto; margin-right: auto;">
    <!-- Card 1 -->
    <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; width: 180px; flex-shrink: 0;">
      <img 
        width="140" 
        src="https://github.com/user-attachments/assets/a7c6527b-bed8-4020-ae50-205fd9aec740" 
        alt="Tela Inicial - TechStore"
        style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.07); display: block; margin: 0 auto;"
      />
      <div style="margin-top: 12px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 4px;">
          <span style="font-size: 18px;">🏠</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937; font-size: 14px;">Página Inicial</h4>
        </div>
        <p style="margin: 4px 0 0; font-size: 12px; color: #6B7280; line-height: 1.4;">Interface principal com produtos em destaque</p>
      </div>
    </div>
    <!-- Card 2 -->
    <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; width: 180px; flex-shrink: 0;">
      <img 
        width="140" 
        src="SUA_SEGUNDA_IMAGEM_AQUI" 
        alt="Catálogo de Produtos - TechStore"
        style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.07); display: block; margin: 0 auto;"
      />
      <div style="margin-top: 12px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 4px;">
          <span style="font-size: 18px;">📦</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937; font-size: 14px;">Catálogo</h4>
        </div>
        <p style="margin: 4px 0 0; font-size: 12px; color: #6B7280; line-height: 1.4;">Visualização completa de produtos com filtros</p>
      </div>
    </div>
    <!-- Card 3 -->
    <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; width: 180px; flex-shrink: 0;">
      <img 
        width="140" 
        src="SUA_TERCEIRA_IMAGEM_AQUI" 
        alt="Detalhes do Produto - TechStore"
        style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.07); display: block; margin: 0 auto;"
      />
      <div style="margin-top: 12px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 4px;">
          <span style="font-size: 18px;">🔍</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937; font-size: 14px;">Detalhes</h4>
        </div>
        <p style="margin: 4px 0 0; font-size: 12px; color: #6B7280; line-height: 1.4;">Informações completas do produto e avaliações</p>
      </div>
    </div>
    <!-- Card 4 -->
    <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; width: 180px; flex-shrink: 0;">
      <img 
        width="140" 
        src="SUA_QUARTA_IMAGEM_AQUI" 
        alt="Carrinho de Compras - TechStore"
        style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.07); display: block; margin: 0 auto;"
      />
      <div style="margin-top: 12px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 4px;">
          <span style="font-size: 18px;">🛒</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937; font-size: 14px;">Carrinho</h4>
        </div>
        <p style="margin: 4px 0 0; font-size: 12px; color: #6B7280; line-height: 1.4;">Resumo dos itens selecionados para compra</p>
      </div>
    </div>
  </div>

  <p style="margin-top: 30px; color: #6B7280; font-style: italic; max-width: 600px;">
    Interface moderna e responsiva desenvolvida com Next.js 14, Tailwind CSS e shadcn/ui, proporcionando uma experiência de usuário excepcional em todos os dispositivos.
  </p>
</div>


## ✨ Funcionalidades

- **Catálogo de Produtos** - Navegação intuitiva por categorias com destaque para mouses
- **Carrinho de Compras** - Adição, remoção e edição de itens com persistência de dados
- **Sistema de Autenticação** - Login seguro com Next Auth
- **Página de Detalhes do Produto** - Visualização completa com galeria de imagens
- **Design Responsivo** - Adaptado para mobile, tablet e desktop
- **Interface Moderna** - Componentes elegantes com shadcn/ui e Tailwind CSS
- **Meus Pedidos** - Histórico de compras e acompanhamento
- **API Integrada** - Endpoints próprios dentro do Next.js

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com App Router
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes elegantes
- **TypeScript** - Tipagem estática para maior confiabilidade

### Autenticação & Gerenciamento de Estado
- **Next Auth** - Autenticação segura e simplificada
- **Context API** - Autenticação segura e simplificada

### Outras Ferramentas
- **Lucide Icons** - Conjunto de ícones elegantes

## 📦 Estrutura do Projeto
