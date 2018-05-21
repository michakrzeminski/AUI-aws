pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Setup') {
      steps {
        sh 'echo \'Hello\''
      }
    }
  }
}