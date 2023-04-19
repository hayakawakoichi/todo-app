import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: [
        {
            'http://localhost:8080/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret':
                        process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? '',
                    'x-hasura-role': 'user',
                },
            },
        },
    ],
    hooks: {
        afterAllFileWrite: ['prettier --write', 'eslint --fix ./src/gql'],
    },
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        'src/gql/': {
            preset: 'client',
            plugins: [
                {
                    add: {
                        content: '/* eslint-disable */',
                    },
                },
            ],
            config: {
                immutableTypes: true,
                defaultScalarType: 'unknown',
                enumsAsConst: true,
            },
        },
    },
}

export default config
