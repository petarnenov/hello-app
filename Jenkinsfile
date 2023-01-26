pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/petarnenov/hello-app', branch: 'main')
      }
    }

    stage('Shell Script') {
      steps {
        sh 'ls -la'
      }
    }

  }
}