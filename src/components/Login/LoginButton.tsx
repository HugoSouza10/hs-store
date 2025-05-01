"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const LoginButton = () => {
    const {data: session } = useSession();

    return session ? (
        <div className="flex items-center gap-2">
          {/* Foto do usuário */}
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="Foto do usuário"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          {/* Nome do usuário */}
          <p>Olá, {session.user?.name}</p>
          {/* Botão de Sair */}
          <button
            onClick={() => signOut()}
            className="ml-2 text-sm text-red-600 hover:text-red-700"
          >
            Sair
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Entrar com Google
        </button>
      );
}

export default LoginButton;