pipeline {
  agent {
    dockerfile {
      filename 'service/Dockerfile'
    }

  }
  stages {
    stage('Setup') {
      steps {
        sh 'echo \'Hello\''
      }
    }
    stage('build') {
      steps {
        sh '''
cd service
npm install'''
      }
    }
    stage('run') {
      steps {
        sh 'cd service'
        sh 'npm start'
      }
    }
  }
}