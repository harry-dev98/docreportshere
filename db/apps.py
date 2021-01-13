from django.apps import AppConfig


class DbConfig(AppConfig):
    name = 'db'
    lable = 'db'
    verbose_name = 'Db'

    def ready(self) -> None:
        super().ready()
        import db.signals