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
    stage('run') {
      parallel {
        stage('run') {
          steps {
            sh '''cd service
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x
'''
          }
        }
        stage('test') {
          steps {
            sh '''cd service
npm test'''
          }
        }
      }
    }
    stage('deploy') {
      steps {
        echo 'Success'
      }
    }
  }
}