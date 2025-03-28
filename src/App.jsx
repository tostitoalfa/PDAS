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
              <ProfileCard 
                title="Cortana"
                handle="@cortana001"
                image="https://store-images.s-microsoft.com/image/apps.61310.13595468919388091.5964ee8b-d14a-4a10-9bb8-4c4fda20c680.315cab1d-a80e-4a0f-9135-435b6d90646c"
                />
                </div>
            <div className="column is-4">
              <ProfileCard 
                title="Siri"
                handle="@Siria05"
                image="https://static.wikia.nocookie.net/apple/images/7/79/Siri_%28logo%29.png/revision/latest?cb=20200715180213&path-prefix=es"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
