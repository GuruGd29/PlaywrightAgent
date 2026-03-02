pipeline {
    agent any

    triggers {
        cron('H/5 * * * *')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/GuruGd29/PlaywrightAgent'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                export PATH="/opt/homebrew/bin:$PATH"
                npm install
                npx playwright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                export PATH="/opt/homebrew/bin:$PATH"
                npx playwright test --reporter=html --workers=3
                '''
            }
        }

        stage('Generate HTML Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }
}