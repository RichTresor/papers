"use client";
import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/fond.jpg')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-3xl p-8 rounded-lg shadow-lg text-center text-white bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold mb-4">Paper's</h1>
        <p className="mb-4">
          Bienvenue chez votre référence bachata sur Lille ! Plongez dans
          l’univers envoûtant de cette danse avec nous. Notre école de danse
          offre un cadre chaleureux et convivial pour tous les niveaux,
          débutants aux confirmés.
        </p>
        <p className="mb-4">
          Nos professeurs passionnés vous aideront à perfectionner votre
          technique à travers des cours adaptés à chacun. Rejoignez également
          nos soirées dansantes pour pratiquer et partager des moments magiques
          avec d’autres passionnés.
        </p>
      </div>
    </div>
  );
};

export default Home;
