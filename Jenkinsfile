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

  }
}