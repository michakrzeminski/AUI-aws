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
  }
}