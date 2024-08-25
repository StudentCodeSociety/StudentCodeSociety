import React from 'react'
import { Button } from '@components/UI/Button'
import { Card } from '@components/Cards';
import '@styles/main.scss';

const App: React.FC = () => {
  return (
    <div>
      <Button />
      <Card
        imageUrl="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-back-view-of-atlantic-puffin-on-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Kubernetes"
        description="Kubernetes is a cluster management system for managing containerized applications across multiple hosts, providing mechanisms for deployment,..."
        buttonLabels={["Learn More", "Start Now", "Explore"]}
      />
      <Card
        imageUrl="https://images.pexels.com/photos/2545734/pexels-photo-2545734.jpeg"
        title="Docker"
        description="Docker is a platform designed to help developers build, share, and run applications."
        buttonLabels={["Get Started", "Documentation"]}
        isLoading={true}
      />
    </div>
  )
}

export default App