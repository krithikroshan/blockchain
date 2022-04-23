# MeetVentures

## Django 

To activate virtual environment:
```
pipenv shell
```

Running the backend: <br>
cd to backend2
```
python manage.py runserver
```

When there are any chnages in the database:
```
python manage.py makemigrations
python manage.py migrate
```

## Testing

The project uses hardhat for testing. 

Testing can be done by running the following scripts

```shell
npx hardhat
npx hardhat compile
npx hardhat test
```

or if needed 

```
npx hardhat help
```