pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'http://gitlab.tftus.com/nodejs-test-framwork-setup/nodejs-test-framwork-setup'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh '<<Build Command>>'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}