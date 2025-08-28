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
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 25px; justify-items: center; margin: 30px 0; width: 100%;">
    <!-- Card 1 -->
    <div style="background: white; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; max-width: 220px;">
      <img 
        width="160" 
        src="https://github.com/user-attachments/assets/a7c6527b-bed8-4020-ae50-205fd9aec740" 
        alt="Tela Inicial - TechStore"
        style="border-radius: 14px; box-shadow: 0 6px 15px rgba(0,0,0,0.07); transition: transform 0.3s ease;"
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'"
      />
      <div style="margin-top: 15px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 5px;">
          <span style="font-size: 20px;">🏠</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937;">Página Inicial</h4>
        </div>
        <p style="margin: 5px 0 0; font-size: 14px; color: #6B7280; line-height: 1.4;">Interface principal com produtos em destaque e navegação intuitiva</p>
      </div>
    </div>
    <!-- Card 3 -->
    <div style="background: white; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; max-width: 220px;">
      <img 
        width="160" 
        src="SUA_SEGUNDA_IMAGEM_AQUI" 
        alt="Catálogo de Produtos - TechStore"
        style="border-radius: 14px; box-shadow: 0 6px 15px rgba(0,0,0,0.07); transition: transform 0.3s ease;"
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'"
      />
      <div style="margin-top: 15px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 5px;">
          <span style="font-size: 20px;">📦</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937;">Catálogo</h4>
        </div>
        <p style="margin: 5px 0 0; font-size: 14px; color: #6B7280; line-height: 1.4;">Visualização completa de produtos com filtros e opções de ordenação</p>
      </div>
    </div>
    <!-- Card 3 -->
    <div style="background: white; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; max-width: 220px;">
      <img 
        width="160" 
        src="SUA_TERCEIRA_IMAGEM_AQUI" 
        alt="Detalhes do Produto - TechStore"
        style="border-radius: 14px; box-shadow: 0 6px 15px rgba(0,0,0,0.07); transition: transform 0.3s ease;"
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'"
      />
      <div style="margin-top: 15px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 5px;">
          <span style="font-size: 20px;">🔍</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937;">Detalhes</h4>
        </div>
        <p style="margin: 5px 0 0; font-size: 14px; color: #6B7280; line-height: 1.4;">Informações completas do produto, galeria de imagens e avaliações</p>
      </div>
    </div>
    <!-- Card 4 -->
    <div style="background: white; border-radius: 20px; padding: 20px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.3s ease; max-width: 220px;">
      <img 
        width="160" 
        src="SUA_QUARTA_IMAGEM_AQUI" 
        alt="Carrinho de Compras - TechStore"
        style="border-radius: 14px; box-shadow: 0 6px 15px rgba(0,0,0,0.07); transition: transform 0.3s ease;"
        onmouseover="this.style.transform='scale(1.05)'"
        onmouseout="this.style.transform='scale(1)'"
      />
      <div style="margin-top: 15px;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 5px;">
          <span style="font-size: 20px;">🛒</span>
          <h4 style="margin: 0; font-weight: 600; color: #1F2937;">Carrinho</h4>
        </div>
        <p style="margin: 5px 0 0; font-size: 14px; color: #6B7280; line-height: 1.4;">Resumo dos itens selecionados e opções para finalizar compra</p>
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
