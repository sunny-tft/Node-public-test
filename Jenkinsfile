pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node run test'
      }
    }
  }
}