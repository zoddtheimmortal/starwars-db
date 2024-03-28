import {
  Component,
  For,
  createResource,
  createSignal,
} from "solid-js";
import { supabase } from "../utils/supabase";
import styles from "../style.module.css";
import Search from "../components/ui/search";
import { useNavigate } from "@solidjs/router";

async function getFactions() {
  let { data: factions, error } = await supabase.from("factions").select();
  return factions;
}

const FactionCard: Component<{ fct: any }> = (props) => {
  const { fct } = props;
  const nav = useNavigate();

  return (
    <div>
      <div className={`card w-84 h-96 bg-base-100 shadow-xl image-full bg-contain ${styles.card}`}>
        <figure>
          <img src={fct.image} alt={fct.name} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">
            {fct.name}
          </h2>
          <code>
            <div>Date of Inception: {fct.doi}</div>
            <div>Advancement Level: {fct.advancement_level}</div>
            <div>Droid Count: {fct.droid_count}</div>
            <div>Weapon Count: {fct.weapon_count}</div>
          </code>
          <div className="card-actions justify-end mt-1">
            <button onClick={() => nav(`/faction/${fct.name}`)} className="btn btn-primary">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Factions: Component<{}> = (props) => {
  const [faction] = createResource(getFactions);
  const nav = useNavigate();

  return (
    <>
      <div className={styles.App}>
        <Search />
        <div className="text-sm breadcrumbs mx-6 mb-2">
          <ul>
            <li>
              <button onClick={() => nav("/home")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => nav("/factions")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Factions
              </button>
            </li>
          </ul>
        </div>
        <div className="mx-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <For each={faction()}>
            {(fct) => <FactionCard fct={fct} />}
          </For>
        </div>
      </div>
    </>
  );
};

export default Factions;
