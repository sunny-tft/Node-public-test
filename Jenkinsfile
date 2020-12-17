pipeline {
  agent any
    
  tools {nodejs "Node"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm install pm2@latest -g'
      }
    }  
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Deploy') {
      steps {
      //   sh 'cd Desktop'
      //   sh 'pwd'
      //   sh 'cd ~/home/tft/Desktop/nodejs-test-framwork-setup'
      //   // sh 'git pull'
      //   // sh 'echo "pulled latest"'
      //   // sh 'npm install'
      //   // sh 'npm "restarting server"'
      //   sh 'ls -a'
      //   sh 'pwd'
      //   // sh 'npm start'
       sh script:'''
          #!/bin/bash
          echo "This is start $(pwd)"
          cd ~/home/tft/Desktop/nodejs-test-framwork-setup
          npm start
        '''
      }
    }
  }
}