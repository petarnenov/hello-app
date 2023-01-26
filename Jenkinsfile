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
        sh '''docker cp ./build 61764890a454:/usr/share/nginx/html
'''
      }
    }

  }
}