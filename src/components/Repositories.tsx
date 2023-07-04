import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RepositoryProps } from "../types/repository";

import classes from './Repositories.module.css';

type RepositoriesProps = {
    loadRepositories: (userName: string) => Promise<RepositoryProps[]>;
  };

const Repositories = ({ loadRepositories }: RepositoriesProps) => {
    const { userName } = useParams<{ userName: string }>();
    const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        if (userName) {
          try {
            const data = await loadRepositories(userName);
            setRepositories(data);
          } catch (error) {
            console.error('Erro ao carregar os repositórios:', error);
          }
        }
      };
  
      setRepositories([]); // Define um valor inicial vazio para o estado
  
      fetchData();
    }, [loadRepositories, userName]);
  

  return (
    <div className={classes.repositories_container}>
      <h2>Repositories</h2>
      <div >
      {repositories.map(({ full_name, name, description }) => (
        <div key={full_name} className={classes.repositories_div}>
          <h3>{name}</h3>
          {description && (<p>{description}</p>)}
          <a className={classes.link} href={`https://www.github.com/${full_name}`} target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Repositories;
