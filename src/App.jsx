import ProfileCard from './ProfileCard'

import './App.css'

function App() {

  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
                title="Alexa"
                handle="@alexa24"
                image="https://cdn.shopify.com/s/files/1/0735/0540/7243/files/Alexa-Logo_480x480.svg?v=1713613419"
              />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
            <div className="column is-4">
              <ProfileCard />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App