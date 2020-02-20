from wagtail.api.v2.views import PagesAPIViewSet
# from wagtail.api.v2.endpoints import PagesAPIEndpoint
from wagtail.images.api.v2.endpoints import ImagesAPIEndpoint
from wagtail.documents.api.v2.endpoints import DocumentsAPIEndpoint
from wagtail.core.models import Page
from wagtail_headless_preview.models import PagePreview

from django.contrib.contenttypes.models import ContentType
from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def page_detail(request):
    """
    Redirects requests for 
    """
    try: 
      url_path = request.query_params.get('path')
      page = Page.objects.filter(url_path=url_path).first()
      if not page:
          return Response({ "error": "Page does not exist"}, status=status.HTTP_404_NOT_FOUND)
      return redirect(f"/api/v2/pages/{page.pk}")
    except Page.DoesNotExist as error:
      return Response(error)

class CustomPagesAPIEndpoint(PagesAPIViewSet):
    pass

class CustomImagesAPIEndpoint(ImagesAPIEndpoint):
    pass

class CustomDocumentsAPIEndpoint(DocumentsAPIEndpoint):
    pass



class PagePreviewAPIEndpoint(PagesAPIViewSet):
    known_query_parameters = PagesAPIViewSet.known_query_parameters.union(['content_type', 'token'])

    def listing_view(self, request):
        page = self.get_object()
        serializer = self.get_serializer(page)
        return Response(serializer.data)

    def detail_view(self, request, pk):
        page = self.get_object()
        serializer = self.get_serializer(page)
        return Response(serializer.data)

    def get_object(self):
        app_label, model = self.request.GET['content_type'].split('.')
        import pdb; pdb.set_trace()
        content_type = ContentType.objects.get(app_label=app_label, model=model)

        page_preview = PagePreview.objects.get(content_type=content_type, token=self.request.GET['token'])
        page = page_preview.as_page()
        if not page.pk:
            # fake primary key to stop API URL routing from complaining
            page.pk = 0

        return page
