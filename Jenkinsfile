pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/petarnenov/hello-app', branch: 'main')
      }
    }

    stage('Log') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build app') {
      steps {
        sh '''npm i
npm run build
ls -la'''
      }
    }

    stage('Upload to Docker') {
      steps {
        sh '''docker cp ./build 9fc0a696a39da126bc2486dff110c51cb498ef1dd8cec7cc44258b6b307120ea:/usr/share/nginx/html
'''
      }
    }

  }
}