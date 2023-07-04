import Repositories from "../components/Repositories";

const Repos = () => {
  const loadRepositories = async(userName:string)  => {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`)
    console.log(userName);
    const data = await res.json();
    console.log(data);
    return data;
  }

  return (
    <div>
        <Repositories loadRepositories={loadRepositories}/>
    </div>
  );
};

export default Repos