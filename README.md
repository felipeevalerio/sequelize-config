# Criar Database
yarn sequelize db:create


# Criar migration
yarn sequelize migration:create --name=nome


# Usar migration
yarn sequelize db:migrate

# Reverter migration
yarn sequelize db:migrate:undo
